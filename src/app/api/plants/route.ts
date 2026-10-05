import { NextRequest, NextResponse } from "next/server";
import { getPlantsCollection, isMongoConfigured } from "@/lib/mongodb";
import { categories } from "@/data/categories";

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export async function GET(req: NextRequest) {
  try {
    if (!isMongoConfigured()) {
      return NextResponse.json({
        success: true,
        data: [],
        configured: false,
        message: "MongoDB connection string (MONGODB_URI) is not configured in .env.local",
      });
    }

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    const collection = await getPlantsCollection();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: any = {};

    if (category && category !== "all") {
      filter.category = category;
    }

    if (search && search.trim()) {
      const q = search.trim();
      filter.$or = [
        { name: { $regex: q, $options: "i" } },
        { scientificName: { $regex: q, $options: "i" } },
        { tag: { $regex: q, $options: "i" } },
        { benefits: { $regex: q, $options: "i" } },
      ];
    }

    const rawPlants = await collection
      .find(filter)
      .sort({ createdAt: -1, _id: -1 })
      .toArray();

    // Normalize _id to string
    const plants = rawPlants.map((doc) => ({
      ...doc,
      _id: doc._id.toString(),
      id: doc.id || doc._id.toString(),
    }));

    return NextResponse.json({
      success: true,
      count: plants.length,
      data: plants,
      configured: true,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch plants";
    console.error("GET /api/plants error:", error);
    return NextResponse.json(
      {
        success: false,
        error: message,
        data: [],
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!isMongoConfigured()) {
      return NextResponse.json(
        {
          success: false,
          error: "MONGODB_URI is not set. Please add your MongoDB connection string in .env.local",
        },
        { status: 400 }
      );
    }

    const body = await req.json();
    const {
      name,
      category,
      price,
      image,
      scientificName = "",
      alt = "",
      bgStyle = "",
      tag = "",
      badge = "",
      benefits = [],
      description = "",
      orderQuery = "",
    } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Product name is required" },
        { status: 400 }
      );
    }

    if (!category || !category.trim()) {
      return NextResponse.json(
        { success: false, error: "Product category is required" },
        { status: 400 }
      );
    }

    if (price === undefined || price === null || isNaN(Number(price))) {
      return NextResponse.json(
        { success: false, error: "Valid price is required" },
        { status: 400 }
      );
    }

    if (!image || !image.trim()) {
      return NextResponse.json(
        { success: false, error: "Product image is required" },
        { status: 400 }
      );
    }

    const matchedCategory = categories.find((c) => c.id === category);
    const categoryName = matchedCategory ? matchedCategory.name : category;

    const baseSlug = slugify(name);
    const uniqueSlug = `${Date.now().toString().slice(-6)}-${baseSlug}`;

    const collection = await getPlantsCollection();

    const newPlantDoc = {
      slug: uniqueSlug,
      category,
      categoryName,
      name: name.trim(),
      scientificName: scientificName.trim(),
      price: Number(price),
      image: image.trim(),
      alt: alt.trim() || name.trim(),
      bgStyle: bgStyle.trim() || "linear-gradient(135deg, #e8f5e9, #f9fdf9)",
      tag: tag.trim() || matchedCategory?.shortName || "Plant",
      badge: badge.trim(),
      benefits: Array.isArray(benefits)
        ? benefits.map((b: string) => b.trim()).filter(Boolean)
        : typeof benefits === "string"
        ? benefits.split(",").map((s) => s.trim()).filter(Boolean)
        : [],
      orderQuery:
        orderQuery.trim() || `${name.trim()} @₹${Number(price)} from Aardhya Green Nursery`,
      description:
        description.trim() ||
        `Fresh, healthy, hand-nurtured ${name.trim()} from Aardhya Green Nursery. Delivered fresh with care in Greater Noida and Delhi NCR.`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await collection.insertOne(newPlantDoc);

    return NextResponse.json(
      {
        success: true,
        data: {
          ...newPlantDoc,
          _id: result.insertedId.toString(),
          id: result.insertedId.toString(),
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create plant";
    console.error("POST /api/plants error:", error);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
