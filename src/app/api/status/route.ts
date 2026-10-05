import { NextResponse } from "next/server";
import { getPlantsCollection, isMongoConfigured } from "@/lib/mongodb";
import { isCloudinaryConfigured } from "@/lib/cloudinary";

export async function GET() {
  const mongoConfigured = isMongoConfigured();
  const cloudinaryConfigured = isCloudinaryConfigured();

  let mongoConnected = false;
  let productCount = 0;
  let mongoError = null;

  if (mongoConfigured) {
    try {
      const collection = await getPlantsCollection();
      productCount = await collection.countDocuments();
      mongoConnected = true;
    } catch (err: unknown) {
      mongoError = err instanceof Error ? err.message : "Connection failed";
    }
  }

  return NextResponse.json({
    mongo: {
      configured: mongoConfigured,
      connected: mongoConnected,
      productCount,
      error: mongoError,
    },
    cloudinary: {
      configured: cloudinaryConfigured,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME ? "Configured" : "Not configured",
    },
    timestamp: new Date().toISOString(),
  });
}
