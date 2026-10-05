import { NextRequest, NextResponse } from "next/server";
import { getPlantsCollection, isMongoConfigured } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { categories } from "@/data/categories";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, { params }: Params) {
  try {
    if (!isMongoConfigured()) {
      return NextResponse.json(
        { success: false, error: "MongoDB is not configured" },
        { status: 500 }
      );
    }

    const { id } = await params;
    const collection = await getPlantsCollection();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const orConditions: any[] = [{ slug: id }];

    if (ObjectId.isValid(id)) {
      orConditions.push({ _id: new ObjectId(id) });
    }

    // Support numeric or string id
    if (!isNaN(Number(id))) {
      orConditions.push({ id: Number(id) });
    }
    orConditions.push({ id: id });

    const plant = await collection.findOne({ $or: orConditions });

    if (!plant) {
      return NextResponse.json(
        { success: false, error: "Plant not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        ...plant,
        _id: plant._id.toString(),
        id: plant.id || plant._id.toString(),
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch plant";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    if (!isMongoConfigured()) {
      return NextResponse.json(
        { success: false, error: "MongoDB is not configured" },
        { status: 500 }
      );
    }

    const { id } = await params;
    const body = await req.json();

    const collection = await getPlantsCollection();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const orConditions: any[] = [{ slug: id }];
    if (ObjectId.isValid(id)) {
      orConditions.push({ _id: new ObjectId(id) });
    }
    if (!isNaN(Number(id))) {
      orConditions.push({ id: Number(id) });
    }
    orConditions.push({ id: id });

    const existing = await collection.findOne({ $or: orConditions });
    if (!existing) {
      return NextResponse.json(
        { success: false, error: "Plant not found to update" },
        { status: 404 }
      );
    }

    const {
      name,
      category,
      price,
      image,
      scientificName,
      alt,
      bgStyle,
      tag,
      badge,
      benefits,
      description,
      orderQuery,
    } = body;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateData: any = {
      updatedAt: new Date().toISOString(),
    };

    if (name !== undefined) updateData.name = name.trim();
    if (scientificName !== undefined) updateData.scientificName = scientificName.trim();
    if (price !== undefined) updateData.price = Number(price);
    if (image !== undefined) updateData.image = image.trim();
    if (alt !== undefined) updateData.alt = alt.trim();
    if (bgStyle !== undefined) updateData.bgStyle = bgStyle.trim();
    if (tag !== undefined) updateData.tag = tag.trim();
    if (badge !== undefined) updateData.badge = badge.trim();
    if (description !== undefined) updateData.description = description.trim();
    if (orderQuery !== undefined) updateData.orderQuery = orderQuery.trim();

    if (category !== undefined) {
      updateData.category = category;
      const matchedCategory = categories.find((c) => c.id === category);
      updateData.categoryName = matchedCategory ? matchedCategory.name : category;
    }

    if (benefits !== undefined) {
      updateData.benefits = Array.isArray(benefits)
        ? benefits.map((b: string) => b.trim()).filter(Boolean)
        : typeof benefits === "string"
        ? benefits.split(",").map((s) => s.trim()).filter(Boolean)
        : [];
    }

    await collection.updateOne({ _id: existing._id }, { $set: updateData });

    const updated = await collection.findOne({ _id: existing._id });

    return NextResponse.json({
      success: true,
      data: {
        ...updated,
        _id: updated?._id.toString(),
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to update plant";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    if (!isMongoConfigured()) {
      return NextResponse.json(
        { success: false, error: "MongoDB is not configured" },
        { status: 500 }
      );
    }

    const { id } = await params;
    const collection = await getPlantsCollection();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const orConditions: any[] = [{ slug: id }];
    if (ObjectId.isValid(id)) {
      orConditions.push({ _id: new ObjectId(id) });
    }
    if (!isNaN(Number(id))) {
      orConditions.push({ id: Number(id) });
    }
    orConditions.push({ id: id });

    const result = await collection.deleteOne({ $or: orConditions });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, error: "Plant not found to delete" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Plant deleted successfully",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to delete plant";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
