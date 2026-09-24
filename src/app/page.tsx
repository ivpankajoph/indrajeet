"use client";

import React, { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import PlantsSection from "@/components/home/PlantsSection";
import ServicesSection from "@/components/home/ServicesSection";
import DeliverySection from "@/components/home/DeliverySection";
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
      <AboutSection />
      <CategoriesSection onCategorySelect={handleCategorySelect} />
      <PlantsSection
        activeCategory={selectedCategory}
        onCategoryChange={(cat) => setSelectedCategory(cat)}
      />
      <ServicesSection />
      <DeliverySection />
      <FeaturesSection />
      <PaymentSection />
      <SocialSection />
      <ContactSection />
    </>
  );
}
