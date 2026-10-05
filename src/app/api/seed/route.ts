import { NextRequest, NextResponse } from "next/server";
import { getPlantsCollection, isMongoConfigured } from "@/lib/mongodb";
import { plants as starterPlants } from "@/data/starterPlants";

export async function POST(req: NextRequest) {
  try {
    if (!isMongoConfigured()) {
      return NextResponse.json(
        {
          success: false,
          error: "MongoDB connection string (MONGODB_URI) is not configured in .env.local",
        },
        { status: 400 }
      );
    }

    const { action } = await req.json().catch(() => ({ action: "seed" }));
    const collection = await getPlantsCollection();

    if (action === "clear") {
      const deleteResult = await collection.deleteMany({});
      return NextResponse.json({
        success: true,
        message: `Cleared ${deleteResult.deletedCount} products from database`,
      });
    }

    // Check existing count
    const existingCount = await collection.countDocuments();
    if (existingCount > 0 && action !== "force") {
      return NextResponse.json({
        success: false,
        message: `Database already contains ${existingCount} products. Send { action: "force" } or { action: "clear" } first.`,
        existingCount,
      });
    }

    // Insert starter plants with timestamps and clean ids
    const now = new Date().toISOString();
    const docsToInsert = starterPlants.map((plant) => ({
      slug: plant.slug,
      category: plant.category,
      categoryName: plant.categoryName,
      name: plant.name,
      scientificName: plant.scientificName || "",
      price: plant.price,
      image: plant.image,
      alt: plant.alt || plant.name,
      bgStyle: plant.bgStyle || "linear-gradient(135deg, #e8f5e9, #f9fdf9)",
      tag: plant.tag || "Nursery Plant",
      badge: plant.badge || "",
      benefits: plant.benefits || [],
      orderQuery: plant.orderQuery || `${plant.name} @${plant.price}`,
      description: plant.description || "",
      createdAt: now,
      updatedAt: now,
    }));

    const result = await collection.insertMany(docsToInsert);

    return NextResponse.json({
      success: true,
      insertedCount: result.insertedCount,
      message: `Successfully seeded ${result.insertedCount} nursery products into MongoDB!`,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to seed database";
    console.error("POST /api/seed error:", error);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
