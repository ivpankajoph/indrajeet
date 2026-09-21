"use client";

import React, { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import PlantsSection from "@/components/home/PlantsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import PaymentSection from "@/components/home/PaymentSection";
import SocialSection from "@/components/home/SocialSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const plantsElem = document.getElementById("plants");
    if (plantsElem) {
      plantsElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeroSection />
      <CategoriesSection onCategorySelect={handleCategorySelect} />
      <PlantsSection
        activeCategory={selectedCategory}
        onCategoryChange={(cat) => setSelectedCategory(cat)}
      />
      <FeaturesSection />
      <PaymentSection />
      <SocialSection />
      <ContactSection />
    </>
  );
}
