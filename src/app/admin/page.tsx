"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plant } from "@/data/plants";
import { categories } from "@/data/categories";

interface SystemStatus {
  mongo: {
    configured: boolean;
    connected: boolean;
    productCount: number;
    error: string | null;
  };
  cloudinary: {
    configured: boolean;
    cloudName: string;
  };
  timestamp?: string;
}

interface PlantFormData {
  name: string;
  scientificName: string;
  category: string;
  price: number | string;
  image: string;
  alt: string;
  tag: string;
  badge: string;
  benefits: string;
  description: string;
  orderQuery: string;
}

const emptyForm: PlantFormData = {
  name: "",
  scientificName: "",
  category: "indoor",
  price: "",
  image: "",
  alt: "",
  tag: "Indoor",
  badge: "",
  benefits: "Air Purifier, Low Maintenance",
  description: "",
  orderQuery: "",
};

export default function AdminDashboardPage() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authChecking, setAuthChecking] = useState<boolean>(true);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // System status
  const [status, setStatus] = useState<SystemStatus | null>(null);
  const [statusLoading, setStatusLoading] = useState<boolean>(true);

  // Modals state
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [editingPlant, setEditingPlant] = useState<Plant | null>(null);
  const [formData, setFormData] = useState<PlantFormData>(emptyForm);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // View Details Modal
  const [detailsPlant, setDetailsPlant] = useState<Plant | null>(null);

  // Delete Confirmation Modal
  const [plantToDelete, setPlantToDelete] = useState<Plant | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Seeding State
  const [isSeeding, setIsSeeding] = useState<boolean>(false);
  const [showSeedConfirm, setShowSeedConfirm] = useState<boolean>(false);
  const [showClearConfirm, setShowClearConfirm] = useState<boolean>(false);

  // Image Upload State
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Toast
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  // Verify authentication session
  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/auth");
      const data = await res.json();
      if (data.authenticated) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setAuthChecking(false);
    }
  }, []);

  // Fetch plants list
  const fetchPlants = useCallback(async () => {
    try {
      const res = await fetch("/api/plants");
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setPlants(data.data);
      } else {
        setPlants([]);
        if (data.error) {
          showToast(data.error, "error");
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to load plants";
      showToast(msg, "error");
      setPlants([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Check system status
  const checkStatus = useCallback(async () => {
    try {
      const res = await fetch("/api/status");
      const data = await res.json();
      setStatus(data);
    } catch (err) {
      console.error("Status check failed:", err);
    } finally {
      setStatusLoading(false);
    }
  }, []);

  const handleRefreshAll = () => {
    setLoading(true);
    setStatusLoading(true);
    fetchPlants();
    checkStatus();
  };

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchPlants();
      checkStatus();
    }
  }, [isAuthenticated, fetchPlants, checkStatus]);

  // Handle password submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordInput.trim()) {
      setPasswordError("Please enter your admin password");
      return;
    }

    try {
      setIsLoggingIn(true);
      setPasswordError("");

      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: passwordInput.trim() }),
      });

      const data = await res.json();

      if (data.success) {
        setIsAuthenticated(true);
        setPasswordInput("");
        showToast("Authenticated successfully. Welcome back!", "success");
      } else {
        setPasswordError(data.error || "Incorrect admin password");
      }
    } catch {
      setPasswordError("Authentication request failed. Please check network connection.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      setIsAuthenticated(false);
      showToast("Logged out of Admin Portal", "info");
    } catch {
      setIsAuthenticated(false);
    }
  };

  // Handle open Add modal
  const handleOpenAdd = () => {
    setEditingPlant(null);
    setFormData({
      ...emptyForm,
      category: categoryFilter !== "all" ? categoryFilter : "indoor",
    });
    setFormErrors({});
    setUploadError(null);
    setIsFormOpen(true);
  };

  // Handle open Edit modal
  const handleOpenEdit = (plant: Plant) => {
    setEditingPlant(plant);
    setFormData({
      name: plant.name || "",
      scientificName: plant.scientificName || "",
      category: plant.category || "indoor",
      price: plant.price || 0,
      image: plant.image || "",
      alt: plant.alt || plant.name || "",
      tag: plant.tag || "",
      badge: plant.badge || "",
      benefits: Array.isArray(plant.benefits) ? plant.benefits.join(", ") : "",
      description: plant.description || "",
      orderQuery: plant.orderQuery || "",
    });
    setFormErrors({});
    setUploadError(null);
    setIsFormOpen(true);
  };

  // Handle Cloudinary Image File Upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      setUploadError(null);

      const uploadData = new FormData();
      uploadData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: uploadData,
      });

      const data = await res.json();

      if (data.success && data.url) {
        setFormData((prev) => ({
          ...prev,
          image: data.url,
          alt: prev.alt || prev.name || file.name.replace(/\.[^/.]+$/, ""),
        }));
        showToast("Image uploaded to Cloudinary successfully!", "success");
      } else {
        const errorMsg = data.error || "Failed to upload image to Cloudinary";
        setUploadError(errorMsg);
        showToast(errorMsg, "error");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Image upload failed";
      setUploadError(msg);
      showToast(msg, "error");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  // Validate form
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Plant name is required";
    if (!formData.category.trim()) errors.category = "Category is required";
    if (
      formData.price === "" ||
      isNaN(Number(formData.price)) ||
      Number(formData.price) < 0
    ) {
      errors.price = "Valid price in ₹ is required";
    }
    if (!formData.image.trim()) {
      errors.image = "Product image is required (upload to Cloudinary or provide URL)";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Save (Create or Update)
  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsSaving(true);
      const isEdit = Boolean(editingPlant);
      const endpoint = isEdit
        ? `/api/plants/${editingPlant?._id || editingPlant?.id || editingPlant?.slug}`
        : "/api/plants";
      const method = isEdit ? "PUT" : "POST";

      const benefitsArray = formData.benefits
        .split(",")
        .map((b) => b.trim())
        .filter(Boolean);

      const payload = {
        name: formData.name.trim(),
        scientificName: formData.scientificName.trim(),
        category: formData.category,
        price: Number(formData.price),
        image: formData.image.trim(),
        alt: formData.alt.trim() || formData.name.trim(),
        tag: formData.tag.trim(),
        badge: formData.badge.trim(),
        benefits: benefitsArray,
        description: formData.description.trim(),
        orderQuery:
          formData.orderQuery.trim() ||
          `${formData.name.trim()} @₹${formData.price} from Aardhya Green Nursery`,
      };

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        showToast(
          isEdit
            ? `Successfully updated "${formData.name}"`
            : `Successfully added "${formData.name}" to catalog!`,
          "success"
        );
        setIsFormOpen(false);
        fetchPlants();
        checkStatus();
      } else {
        showToast(data.error || "Failed to save product", "error");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error saving product";
      showToast(msg, "error");
    } finally {
      setIsSaving(false);
    }
  };

  // Delete Plant
  const handleDeleteProduct = async () => {
    if (!plantToDelete) return;
    try {
      setIsDeleting(true);
      const targetId =
        plantToDelete._id || plantToDelete.id || plantToDelete.slug;
      const res = await fetch(`/api/plants/${targetId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        showToast(`Deleted "${plantToDelete.name}" successfully`, "success");
        setPlantToDelete(null);
        fetchPlants();
        checkStatus();
      } else {
        showToast(data.error || "Failed to delete product", "error");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error deleting product";
      showToast(msg, "error");
    } finally {
      setIsDeleting(false);
    }
  };

  // Seed Starter Plants
  const handleSeedCatalog = async (action: "seed" | "force") => {
    try {
      setIsSeeding(true);
      const res = await fetch("/api/seed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      const data = await res.json();
      if (data.success) {
        showToast(data.message || "Seeded nursery catalog successfully!", "success");
        setShowSeedConfirm(false);
        fetchPlants();
        checkStatus();
      } else {
        showToast(data.message || data.error || "Failed to seed database", "error");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Seed failed";
      showToast(msg, "error");
    } finally {
      setIsSeeding(false);
    }
  };

  // Clear Database
  const handleClearDatabase = async () => {
    try {
      setIsSeeding(true);
      const res = await fetch("/api/seed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "clear" }),
      });
      const data = await res.json();
      if (data.success) {
        showToast(data.message || "Catalog cleared successfully", "info");
        setShowClearConfirm(false);
        fetchPlants();
        checkStatus();
      } else {
        showToast(data.error || "Failed to clear database", "error");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Clear failed";
      showToast(msg, "error");
    } finally {
      setIsSeeding(false);
    }
  };

  // Filtered plants for table and grid
  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const matchesCategory =
        categoryFilter === "all" || plant.category === categoryFilter;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const matchesName = plant.name?.toLowerCase().includes(q);
      const matchesSci = plant.scientificName?.toLowerCase().includes(q);
      const matchesTag = plant.tag?.toLowerCase().includes(q);
      const matchesBenefit = plant.benefits?.some((b) =>
        b.toLowerCase().includes(q)
      );

      return matchesName || matchesSci || matchesTag || matchesBenefit;
    });
  }, [plants, categoryFilter, searchQuery]);

  // Stats calculation
  const stats = useMemo(() => {
    const total = plants.length;
    const bestSellers = plants.filter((p) => p.badge?.includes("Best")).length;
    const categoryCounts: Record<string, number> = {};
    let minPrice = Infinity;
    let maxPrice = 0;

    plants.forEach((p) => {
      categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
      if (p.price < minPrice) minPrice = p.price;
      if (p.price > maxPrice) maxPrice = p.price;
    });

    return {
      total,
      bestSellers,
      uniqueCategories: Object.keys(categoryCounts).length,
      priceRange: total > 0 ? `₹${minPrice} - ₹${maxPrice}` : "N/A",
    };
  }, [plants]);

  if (authChecking) {
    return (
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "85vh", background: "#f4f8f4" }}
      >
        <div className="spinner-border text-success mb-3" style={{ width: "3rem", height: "3rem" }}></div>
        <p className="text-muted fw-semibold">Verifying secure administrator session...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div
        className="d-flex align-items-center justify-content-center py-5 px-3"
        style={{
          minHeight: "88vh",
          background: "linear-gradient(135deg, #e8f5e9, #f9fdf9)",
        }}
      >
        <div
          className="bg-white rounded-4 shadow-lg p-4 p-md-5 border border-success-subtle text-center"
          style={{ maxWidth: "440px", width: "100%" }}
        >
          <div
            className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 bg-success-subtle text-success"
            style={{ width: "70px", height: "70px" }}
          >
            <i className="fas fa-lock fs-2"></i>
          </div>

          <h3 className="fw-bold mb-1" style={{ color: "var(--primary)" }}>
            Admin Access
          </h3>
          <p className="text-muted small mb-4">
            Enter the administrator password to manage products, catalog, and images.
          </p>

          <form onSubmit={handleLogin}>
            <div className="mb-3 text-start">
              <label className="form-label fw-semibold small text-muted">
                Admin Password
              </label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <i className="fas fa-key text-muted"></i>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control bg-light border-start-0 border-end-0 ${
                    passwordError ? "is-invalid" : ""
                  }`}
                  placeholder="Enter admin password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (passwordError) setPasswordError("");
                  }}
                  autoFocus
                />
                <button
                  type="button"
                  className="btn btn-light border-start-0 text-muted"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                </button>
              </div>
              {passwordError && (
                <div className="text-danger small mt-2 d-flex align-items-center gap-1">
                  <i className="fas fa-circle-exclamation"></i>
                  <span>{passwordError}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="btn btn-success w-100 rounded-pill py-2 fw-semibold d-inline-flex align-items-center justify-content-center shadow-sm"
            >
              {isLoggingIn ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Verifying...
                </>
              ) : (
                <>
                  <i className="fas fa-unlock me-2"></i> Unlock Dashboard
                </>
              )}
            </button>
          </form>

          <div className="mt-4 pt-3 border-top text-muted small">
            Protected area for Aardhya Green Nursery administration.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard py-4" style={{ minHeight: "90vh", background: "#f4f8f4" }}>
      {/* Toast Notification */}
      {toast && (
        <div
          className={`position-fixed top-0 end-0 m-4 p-3 rounded-4 shadow-lg text-white d-flex align-items-center gap-3 animate__animated animate__fadeInDown`}
          style={{
            zIndex: 1060,
            maxWidth: "420px",
            background:
              toast.type === "success"
                ? "#2e7d32"
                : toast.type === "error"
                ? "#c62828"
                : "#1565c0",
          }}
        >
          <i
            className={`fas ${
              toast.type === "success"
                ? "fa-check-circle"
                : toast.type === "error"
                ? "fa-triangle-exclamation"
                : "fa-info-circle"
            } fs-4`}
          ></i>
          <div className="flex-grow-1 small">{toast.message}</div>
          <button
            type="button"
            className="btn btn-sm btn-link text-white p-0"
            onClick={() => setToast(null)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}

      <div className="container">
        {/* Top Header Card */}
        <div className="bg-white rounded-4 shadow-sm p-4 mb-4 border border-success-subtle">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center bg-success-subtle"
                style={{ width: "56px", height: "56px" }}
              >
                <i className="fas fa-seedling text-success fs-3"></i>
              </div>
              <div>
                <h1 className="h3 fw-bold mb-1" style={{ color: "var(--primary)" }}>
                  Aardhya Nursery Admin Panel
                </h1>
                <p className="text-muted mb-0 small">
                  Manage live catalog, products, prices, and Cloudinary media assets.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2 flex-wrap">
              <Link
                href="/"
                target="_blank"
                className="btn btn-sm btn-outline-success rounded-pill px-3 py-2 fw-semibold d-inline-flex align-items-center"
              >
                <i className="fas fa-external-link-alt me-1"></i> View Live Store
              </Link>

              <button
                type="button"
                onClick={handleOpenAdd}
                className="btn btn-sm btn-success rounded-pill px-3 py-2 fw-semibold d-inline-flex align-items-center shadow-sm"
              >
                <i className="fas fa-plus me-1"></i> Add New Product
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="btn btn-sm btn-outline-danger rounded-pill px-3 py-2 fw-semibold d-inline-flex align-items-center"
                title="Lock & Exit Admin Panel"
              >
                <i className="fas fa-arrow-right-from-bracket me-1"></i> Lock &amp; Exit
              </button>
            </div>
          </div>

          {/* System Connectivity Status Bar */}
          <div className="mt-3 pt-3 border-top d-flex flex-wrap align-items-center justify-content-between gap-2 text-muted small">
            <div className="d-flex align-items-center gap-3 flex-wrap">
              {/* MongoDB Status */}
              <div className="d-flex align-items-center gap-2">
                <span className="fw-semibold">MongoDB:</span>
                {statusLoading ? (
                  <span className="badge bg-secondary">Checking...</span>
                ) : status?.mongo.connected ? (
                  <span className="badge bg-success-subtle text-success border border-success-subtle d-inline-flex align-items-center gap-1">
                    <i className="fas fa-circle-check text-success"></i> Connected ({status.mongo.productCount} docs)
                  </span>
                ) : (
                  <span className="badge bg-danger-subtle text-danger border border-danger-subtle d-inline-flex align-items-center gap-1">
                    <i className="fas fa-circle-exclamation text-danger"></i> Disconnected / URI Missing
                  </span>
                )}
              </div>

              {/* Cloudinary Status */}
              <div className="d-flex align-items-center gap-2">
                <span className="fw-semibold">Cloudinary:</span>
                {statusLoading ? (
                  <span className="badge bg-secondary">Checking...</span>
                ) : status?.cloudinary.configured ? (
                  <span className="badge bg-success-subtle text-success border border-success-subtle d-inline-flex align-items-center gap-1">
                    <i className="fas fa-cloud text-success"></i> Ready for Uploads
                  </span>
                ) : (
                  <span className="badge bg-warning-subtle text-dark border border-warning-subtle d-inline-flex align-items-center gap-1">
                    <i className="fas fa-triangle-exclamation text-warning"></i> Keys Missing in .env.local
                  </span>
                )}
              </div>
            </div>

            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                className="btn btn-sm btn-link text-decoration-none text-muted p-0"
                onClick={handleRefreshAll}
              >
                <i className="fas fa-rotate me-1"></i> Refresh Status
              </button>
            </div>
          </div>
        </div>

        {/* Missing Keys Guidance Banner (If env is not configured) */}
        {(!status?.mongo.connected || !status?.cloudinary.configured) && !statusLoading && (
          <div
            className="p-3 mb-4 rounded-4 border shadow-sm"
            style={{ background: "#fffde7", borderColor: "#fff59d" }}
          >
            <div className="d-flex align-items-start gap-3">
              <i className="fas fa-circle-info text-warning fs-3 mt-1"></i>
              <div className="flex-grow-1 small">
                <h6 className="fw-bold mb-1 text-dark">
                  Environment Setup Guide (.env.local)
                </h6>
                <p className="mb-2 text-muted">
                  To persist products to your MongoDB database and upload images to Cloudinary,
                  make sure your <code>.env.local</code> file contains your keys:
                </p>
                <pre
                  className="bg-white p-2 rounded-3 border text-dark mb-2"
                  style={{ fontSize: "0.8rem", overflowX: "auto" }}
                >
{`MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/aardhya_nursery?retryWrites=true&w=majority
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret`}
                </pre>
                <p className="mb-0 text-muted">
                  After saving <code>.env.local</code>, your data and image uploads will be permanently saved and live on the nursery site.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Stats Row */}
        <div className="row g-3 mb-4">
          <div className="col-sm-6 col-lg-3">
            <div className="bg-white rounded-4 p-3 shadow-sm border border-light-subtle h-100">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small fw-medium">Total Products</div>
                  <div className="fs-3 fw-bold" style={{ color: "var(--primary)" }}>
                    {stats.total}
                  </div>
                </div>
                <div
                  className="rounded-3 p-3 bg-success-subtle text-success d-flex align-items-center justify-content-center"
                  style={{ width: "48px", height: "48px" }}
                >
                  <i className="fas fa-leaf fs-5"></i>
                </div>
              </div>
              <div className="small text-muted mt-2">
                Available in online nursery
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="bg-white rounded-4 p-3 shadow-sm border border-light-subtle h-100">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small fw-medium">Active Categories</div>
                  <div className="fs-3 fw-bold text-success">
                    {stats.uniqueCategories} / {categories.length}
                  </div>
                </div>
                <div
                  className="rounded-3 p-3 bg-primary-subtle text-primary d-flex align-items-center justify-content-center"
                  style={{ width: "48px", height: "48px" }}
                >
                  <i className="fas fa-layer-group fs-5"></i>
                </div>
              </div>
              <div className="small text-muted mt-2">
                Plants, pots, manure &amp; soil
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="bg-white rounded-4 p-3 shadow-sm border border-light-subtle h-100">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small fw-medium">Best Sellers</div>
                  <div className="fs-3 fw-bold text-warning">
                    {stats.bestSellers}
                  </div>
                </div>
                <div
                  className="rounded-3 p-3 bg-warning-subtle text-warning d-flex align-items-center justify-content-center"
                  style={{ width: "48px", height: "48px" }}
                >
                  <i className="fas fa-fire fs-5"></i>
                </div>
              </div>
              <div className="small text-muted mt-2">
                Marked with highlight badge
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="bg-white rounded-4 p-3 shadow-sm border border-light-subtle h-100">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small fw-medium">Price Range</div>
                  <div className="fs-5 fw-bold text-dark mt-1">
                    {stats.priceRange}
                  </div>
                </div>
                <div
                  className="rounded-3 p-3 bg-info-subtle text-info d-flex align-items-center justify-content-center"
                  style={{ width: "48px", height: "48px" }}
                >
                  <i className="fas fa-indian-rupee-sign fs-5"></i>
                </div>
              </div>
              <div className="small text-muted mt-2">
                Competitive nursery rates
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar & Filters Card */}
        <div className="bg-white rounded-4 p-3 shadow-sm border border-light-subtle mb-4">
          <div className="row g-3 align-items-center">
            {/* Search Box */}
            <div className="col-md-5">
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <i className="fas fa-search text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control bg-light border-start-0 py-2"
                  placeholder="Search by product name, botanical name or tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    className="btn btn-light border-start-0"
                    type="button"
                    onClick={() => setSearchQuery("")}
                  >
                    <i className="fas fa-times text-muted"></i>
                  </button>
                )}
              </div>
            </div>

            {/* Category Selector */}
            <div className="col-md-4">
              <select
                className="form-select bg-light py-2"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">🌿 All Categories ({plants.length})</option>
                {categories.map((c) => {
                  const count = plants.filter((p) => p.category === c.id).length;
                  return (
                    <option key={c.id} value={c.id}>
                      {c.name} ({count})
                    </option>
                  );
                })}
              </select>
            </div>

            {/* View Mode & Extra Action Buttons */}
            <div className="col-md-3 d-flex justify-content-md-end align-items-center gap-2">
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn btn-sm ${
                    viewMode === "grid" ? "btn-success" : "btn-outline-secondary"
                  }`}
                  onClick={() => setViewMode("grid")}
                  title="Grid View"
                >
                  <i className="fas fa-th-large"></i>
                </button>
                <button
                  type="button"
                  className={`btn btn-sm ${
                    viewMode === "table" ? "btn-success" : "btn-outline-secondary"
                  }`}
                  onClick={() => setViewMode("table")}
                  title="Table View"
                >
                  <i className="fas fa-table-list"></i>
                </button>
              </div>

              {/* Seed / Backup actions */}
              <div className="dropdown">
                <button
                  className="btn btn-sm btn-outline-secondary dropdown-toggle rounded-pill px-3"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => setShowSeedConfirm(!showSeedConfirm)}
                >
                  <i className="fas fa-ellipsis-vertical"></i> Actions
                </button>
                {showSeedConfirm && (
                  <div
                    className="position-absolute end-0 mt-2 bg-white rounded-3 shadow-lg border p-2 text-start"
                    style={{ zIndex: 100, minWidth: "220px" }}
                  >
                    <button
                      type="button"
                      className="dropdown-item py-2 px-3 rounded-2 text-dark small"
                      onClick={() => {
                        setShowSeedConfirm(false);
                        handleSeedCatalog("seed");
                      }}
                      disabled={isSeeding}
                    >
                      <i className="fas fa-cloud-arrow-down me-2 text-success"></i> Import Starter Catalog
                    </button>
                    <button
                      type="button"
                      className="dropdown-item py-2 px-3 rounded-2 text-danger small"
                      onClick={() => {
                        setShowSeedConfirm(false);
                        setShowClearConfirm(true);
                      }}
                      disabled={isSeeding}
                    >
                      <i className="fas fa-trash-can me-2 text-danger"></i> Clear All Catalog
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section: Grid or Table */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-success mb-3" style={{ width: "3rem", height: "3rem" }}></div>
            <p className="text-muted fw-semibold">Loading products from database...</p>
          </div>
        ) : filteredPlants.length === 0 ? (
          /* Empty Catalog State */
          <div className="bg-white rounded-4 p-5 text-center shadow-sm border border-light-subtle my-3">
            <div className="display-4 text-success mb-3">🌱</div>
            <h4 className="fw-bold mb-2" style={{ color: "var(--primary)" }}>
              No Products Found
            </h4>
            <p className="text-muted mx-auto mb-4" style={{ maxWidth: "480px" }}>
              {searchQuery || categoryFilter !== "all"
                ? "No products match your current search or filter. Try clearing the filter."
                : "Your nursery catalog is currently empty. You can add your first plant or import the default catalog."}
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={handleOpenAdd}
                className="btn btn-success rounded-pill px-4 py-2 fw-semibold"
              >
                <i className="fas fa-plus me-1"></i> Add First Product
              </button>
              {plants.length === 0 && (
                <button
                  type="button"
                  onClick={() => handleSeedCatalog("seed")}
                  disabled={isSeeding}
                  className="btn btn-outline-success rounded-pill px-4 py-2 fw-semibold"
                >
                  <i className="fas fa-database me-1"></i>
                  {isSeeding ? "Importing..." : "Seed Starter Inventory"}
                </button>
              )}
              {(searchQuery || categoryFilter !== "all") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setCategoryFilter("all");
                  }}
                  className="btn btn-outline-secondary rounded-pill px-4 py-2"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="row g-4">
            {filteredPlants.map((plant) => (
              <div
                key={plant._id || plant.id || plant.slug}
                className="col-sm-6 col-md-4 col-xl-3"
              >
                <div className="bg-white rounded-4 shadow-sm border border-light-subtle h-100 d-flex flex-column overflow-hidden transition-all hover-shadow">
                  {/* Plant Image */}
                  <div
                    className="position-relative w-100"
                    style={{
                      height: "200px",
                      background: plant.bgStyle
                        ? plant.bgStyle.replace("background:", "").trim()
                        : "#e8f5e9",
                    }}
                  >
                    <Image
                      src={plant.image || "/images/logo.png"}
                      alt={plant.alt || plant.name}
                      fill
                      sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                    {plant.badge && (
                      <div
                        className="position-absolute top-0 start-0 m-2 px-2 py-1 rounded-pill text-white fw-bold shadow-sm"
                        style={{ background: "#ff8f00", fontSize: "0.75rem" }}
                      >
                        {plant.badge}
                      </div>
                    )}
                    <div
                      className="position-absolute top-0 end-0 m-2 px-2 py-1 rounded-pill fw-semibold bg-white text-success shadow-sm"
                      style={{ fontSize: "0.72rem" }}
                    >
                      {plant.categoryName || plant.tag}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-3 d-flex flex-column flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <h6 className="fw-bold mb-0 text-truncate" title={plant.name}>
                        {plant.name}
                      </h6>
                    </div>
                    {plant.scientificName && (
                      <div
                        className="fst-italic text-muted small text-truncate mb-2"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {plant.scientificName}
                      </div>
                    )}

                    <div className="mt-auto pt-2">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="fs-5 fw-bold" style={{ color: "var(--primary)" }}>
                          ₹ {plant.price}
                        </span>
                        {plant.tag && (
                          <span
                            className="badge bg-light text-dark border px-2 py-1"
                            style={{ fontSize: "0.7rem" }}
                          >
                            {plant.tag}
                          </span>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="d-flex gap-1">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-success rounded-pill flex-grow-1 d-inline-flex align-items-center justify-content-center"
                          onClick={() => setDetailsPlant(plant)}
                          title="View Full Product Details"
                          style={{ fontSize: "0.8rem" }}
                        >
                          <i className="fas fa-eye me-1"></i> View Details
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary rounded-pill px-2"
                          onClick={() => handleOpenEdit(plant)}
                          title="Edit Product"
                        >
                          <i className="fas fa-pen-to-square"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger rounded-pill px-2"
                          onClick={() => setPlantToDelete(plant)}
                          title="Delete Product"
                        >
                          <i className="fas fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table View */
          <div className="bg-white rounded-4 shadow-sm border border-light-subtle overflow-hidden">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr className="small text-muted text-uppercase">
                    <th scope="col" style={{ width: "70px" }}>Image</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Tag / Badge</th>
                    <th scope="col">Benefits</th>
                    <th scope="col" className="text-end" style={{ width: "160px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPlants.map((plant) => (
                    <tr key={plant._id || plant.id || plant.slug}>
                      <td>
                        <div
                          className="position-relative rounded-3 overflow-hidden bg-light"
                          style={{ width: "54px", height: "54px" }}
                        >
                          <Image
                            src={plant.image || "/images/logo.png"}
                            alt={plant.alt || plant.name}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="fw-bold text-dark">{plant.name}</div>
                        {plant.scientificName && (
                          <div className="fst-italic text-muted small">
                            {plant.scientificName}
                          </div>
                        )}
                      </td>
                      <td>
                        <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill">
                          {plant.categoryName || plant.category}
                        </span>
                      </td>
                      <td>
                        <span className="fw-bold text-success fs-6">₹ {plant.price}</span>
                      </td>
                      <td>
                        <div className="d-flex flex-wrap gap-1">
                          {plant.tag && (
                            <span className="badge bg-light text-dark border">
                              {plant.tag}
                            </span>
                          )}
                          {plant.badge && (
                            <span
                              className="badge text-white"
                              style={{ background: "#ff8f00" }}
                            >
                              {plant.badge}
                            </span>
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="small text-muted text-truncate" style={{ maxWidth: "200px" }}>
                          {plant.benefits && plant.benefits.length > 0
                            ? plant.benefits.join(", ")
                            : "—"}
                        </div>
                      </td>
                      <td className="text-end">
                        <div className="d-inline-flex gap-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-success rounded-circle"
                            style={{ width: "32px", height: "32px" }}
                            onClick={() => setDetailsPlant(plant)}
                            title="View Details"
                          >
                            <i className="fas fa-eye"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-primary rounded-circle"
                            style={{ width: "32px", height: "32px" }}
                            onClick={() => handleOpenEdit(plant)}
                            title="Edit"
                          >
                            <i className="fas fa-pen-to-square"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-danger rounded-circle"
                            style={{ width: "32px", height: "32px" }}
                            onClick={() => setPlantToDelete(plant)}
                            title="Delete"
                          >
                            <i className="fas fa-trash-can"></i>
                          </button>
                          <Link
                            href={`/plants/${plant.slug}`}
                            target="_blank"
                            className="btn btn-sm btn-outline-secondary rounded-circle"
                            style={{ width: "32px", height: "32px" }}
                            title="View Public Page"
                          >
                            <i className="fas fa-external-link"></i>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================== */}
      {/* ADD / EDIT PRODUCT MODAL                                       */}
      {/* ============================================================== */}
      {isFormOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1050,
            backdropFilter: "blur(6px)",
          }}
          onClick={() => !isSaving && setIsFormOpen(false)}
        >
          <div
            className="bg-white rounded-4 shadow-xl overflow-hidden position-relative m-3"
            style={{ maxWidth: "720px", width: "100%", maxHeight: "92vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-bottom d-flex align-items-center justify-content-between bg-light">
              <div>
                <h5 className="fw-bold mb-0" style={{ color: "var(--primary)" }}>
                  <i className={`fas ${editingPlant ? "fa-pen-to-square" : "fa-plus-circle"} me-2 text-success`}></i>
                  {editingPlant ? "Edit Product Details" : "Add New Plant or Garden Item"}
                </h5>
                <small className="text-muted">
                  Fill in all specifications and media to publish to your live nursery catalog.
                </small>
              </div>
              <button
                type="button"
                className="btn btn-light rounded-circle shadow-sm border-0 d-flex align-items-center justify-content-center"
                style={{ width: "36px", height: "36px" }}
                onClick={() => setIsFormOpen(false)}
                disabled={isSaving}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Modal Form Body */}
            <form onSubmit={handleSaveProduct} className="p-4">
              <div className="row g-3">
                {/* 1. Name */}
                <div className="col-md-7">
                  <label className="form-label fw-semibold small">
                    Product / Plant Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
                    placeholder="e.g. Marble Money Plant in 6 Inch Nursery Pot"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {formErrors.name && (
                    <div className="invalid-feedback">{formErrors.name}</div>
                  )}
                </div>

                {/* 2. Price */}
                <div className="col-md-5">
                  <label className="form-label fw-semibold small">
                    Price in ₹ <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">₹</span>
                    <input
                      type="number"
                      min="0"
                      step="1"
                      className={`form-control ${formErrors.price ? "is-invalid" : ""}`}
                      placeholder="e.g. 189"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    />
                    {formErrors.price && (
                      <div className="invalid-feedback">{formErrors.price}</div>
                    )}
                  </div>
                </div>

                {/* 3. Scientific / Botanical Name */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">
                    Botanical / Scientific Name (Optional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Epipremnum aureum"
                    value={formData.scientificName}
                    onChange={(e) =>
                      setFormData({ ...formData, scientificName: e.target.value })
                    }
                  />
                </div>

                {/* 4. Category Selector */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">
                    Category <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    value={formData.category}
                    onChange={(e) => {
                      const selected = categories.find((c) => c.id === e.target.value);
                      setFormData({
                        ...formData,
                        category: e.target.value,
                        tag: selected ? selected.shortName : formData.tag,
                      });
                    }}
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 5. Cloudinary Image Upload Section */}
                <div className="col-12">
                  <label className="form-label fw-semibold small">
                    Product Image (Cloudinary Upload) <span className="text-danger">*</span>
                  </label>
                  <div className="p-3 border rounded-3 bg-light">
                    <div className="d-flex flex-wrap align-items-center gap-3">
                      {/* Image Preview */}
                      <div
                        className="position-relative rounded-3 overflow-hidden border bg-white shadow-sm flex-shrink-0"
                        style={{ width: "100px", height: "100px" }}
                      >
                        {formData.image ? (
                          <Image
                            src={formData.image}
                            alt="Product Preview"
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        ) : (
                          <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-muted">
                            <i className="fas fa-image fs-3 mb-1"></i>
                            <span style={{ fontSize: "0.65rem" }}>No Image</span>
                          </div>
                        )}
                        {isUploading && (
                          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center text-white">
                            <div className="spinner-border spinner-border-sm text-light"></div>
                          </div>
                        )}
                      </div>

                      {/* Upload Controls */}
                      <div className="flex-grow-1">
                        <div className="d-flex gap-2 mb-2 flex-wrap">
                          <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            className="d-none"
                            id="cloudinaryFileInput"
                            onChange={handleFileUpload}
                            disabled={isUploading}
                          />
                          <label
                            htmlFor="cloudinaryFileInput"
                            className="btn btn-sm btn-outline-success fw-semibold px-3 py-2 cursor-pointer d-inline-flex align-items-center"
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fas fa-cloud-arrow-up me-2"></i>
                            {isUploading ? "Uploading to Cloudinary..." : "Upload from Device"}
                          </label>

                          {formData.image && (
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => setFormData({ ...formData, image: "" })}
                            >
                              Clear Image
                            </button>
                          )}
                        </div>

                        {/* Direct URL input fallback */}
                        <div className="input-group input-group-sm">
                          <span className="input-group-text bg-white">URL</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Or paste direct image URL (Cloudinary, /images/...)"
                            value={formData.image}
                            onChange={(e) =>
                              setFormData({ ...formData, image: e.target.value })
                            }
                          />
                        </div>

                        {uploadError && (
                          <div className="text-danger small mt-1">
                            <i className="fas fa-circle-exclamation me-1"></i>
                            {uploadError}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {formErrors.image && (
                    <div className="text-danger small mt-1">{formErrors.image}</div>
                  )}
                </div>

                {/* 6. Tag & Badge */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Tag Label</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Indoor, Balcony, Air Purifier"
                    value={formData.tag}
                    onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Promotional Badge</label>
                  <select
                    className="form-select"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                  >
                    <option value="">No Badge</option>
                    <option value="🔥 Best Seller">🔥 Best Seller</option>
                    <option value="⭐ Popular">⭐ Popular</option>
                    <option value="🌿 New Arrival">🌿 New Arrival</option>
                    <option value="✨ Special Offer">✨ Special Offer</option>
                    <option value="Rare Variety">Rare Variety</option>
                  </select>
                </div>

                {/* 7. Benefits / Highlights */}
                <div className="col-12">
                  <label className="form-label fw-semibold small">
                    Key Highlights &amp; Benefits (Comma separated)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Air Purifier, Low Light, Easy Care, O₂ at Night"
                    value={formData.benefits}
                    onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
                  />
                  <div className="form-text small">
                    Separate multiple benefits with a comma.
                  </div>
                </div>

                {/* 8. Description */}
                <div className="col-12">
                  <label className="form-label fw-semibold small">
                    Product Description &amp; Care Details
                  </label>
                  <textarea
                    rows={3}
                    className="form-control"
                    placeholder="Describe plant care, pot size, foliage quality, and nursery delivery guarantee..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="mt-4 pt-3 border-top d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-pill px-4"
                  onClick={() => setIsFormOpen(false)}
                  disabled={isSaving}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-success rounded-pill px-5 fw-semibold d-inline-flex align-items-center"
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Saving to Database...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-check me-2"></i>
                      {editingPlant ? "Update Product" : "Publish Product"}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* VIEW DETAILS MODAL                                             */}
      {/* ============================================================== */}
      {detailsPlant && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            zIndex: 1050,
            backdropFilter: "blur(6px)",
          }}
          onClick={() => setDetailsPlant(null)}
        >
          <div
            className="bg-white rounded-4 shadow-xl overflow-hidden position-relative m-3"
            style={{ maxWidth: "640px", width: "100%", maxHeight: "90vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setDetailsPlant(null)}
              className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle shadow-sm border-0 d-flex align-items-center justify-content-center"
              style={{ width: "36px", height: "36px", zIndex: 10 }}
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Plant Image */}
            <div
              className="position-relative w-100"
              style={{
                height: "280px",
                background: detailsPlant.bgStyle
                  ? detailsPlant.bgStyle.replace("background:", "").trim()
                  : "#e8f5e9",
              }}
            >
              <Image
                src={detailsPlant.image || "/images/logo.png"}
                alt={detailsPlant.alt || detailsPlant.name}
                fill
                style={{ objectFit: "cover" }}
              />
              {detailsPlant.badge && (
                <div
                  className="position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill text-white fw-bold shadow-sm"
                  style={{ background: "#ff8f00", fontSize: "0.85rem" }}
                >
                  {detailsPlant.badge}
                </div>
              )}
            </div>

            {/* Plant Info */}
            <div className="p-4">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span
                  className="badge px-3 py-2 rounded-pill"
                  style={{ background: "var(--mint-mid)", color: "var(--primary)", fontSize: "0.85rem" }}
                >
                  {detailsPlant.categoryName || detailsPlant.category}
                </span>
                <span className="fs-3 fw-bold" style={{ color: "var(--primary)" }}>
                  ₹ {detailsPlant.price}
                </span>
              </div>

              <h4 className="fw-bold mb-1" style={{ color: "var(--text-dark)" }}>
                {detailsPlant.name}
              </h4>

              {detailsPlant.scientificName && (
                <p className="fst-italic text-muted mb-3" style={{ fontSize: "0.95rem" }}>
                  Botanical Name: {detailsPlant.scientificName}
                </p>
              )}

              {detailsPlant.benefits && detailsPlant.benefits.length > 0 && (
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {detailsPlant.benefits.map((b, i) => (
                    <span key={i} className="benefit-chip">
                      <i className="fas fa-check-circle me-1 text-success"></i>
                      {b}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-muted mb-4" style={{ lineHeight: "1.6", fontSize: "0.95rem" }}>
                {detailsPlant.description || "Hand-nurtured healthy nursery plant from Aardhya Green Nursery in Greater Noida."}
              </p>

              {/* Admin technical details */}
              <div className="p-3 bg-light rounded-3 mb-4 text-muted small border">
                <div className="row g-2">
                  <div className="col-6">
                    <span className="fw-semibold">Slug:</span> {detailsPlant.slug}
                  </div>
                  <div className="col-6">
                    <span className="fw-semibold">Database ID:</span>{" "}
                    <span className="text-truncate d-inline-block" style={{ maxWidth: "140px" }}>
                      {detailsPlant._id || detailsPlant.id}
                    </span>
                  </div>
                  <div className="col-12 text-truncate">
                    <span className="fw-semibold">Image Source:</span>{" "}
                    <a
                      href={detailsPlant.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success text-decoration-none"
                    >
                      {detailsPlant.image}
                    </a>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-outline-primary rounded-pill px-4 fw-semibold"
                  onClick={() => {
                    const plant = detailsPlant;
                    setDetailsPlant(null);
                    handleOpenEdit(plant);
                  }}
                >
                  <i className="fas fa-pen-to-square me-2"></i> Edit Product
                </button>
                <Link
                  href={`/plants/${detailsPlant.slug}`}
                  target="_blank"
                  className="btn btn-success rounded-pill px-4 fw-semibold flex-grow-1 text-center"
                >
                  <i className="fas fa-external-link-alt me-2"></i> View on Live Site
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* DELETE CONFIRMATION MODAL                                      */}
      {/* ============================================================== */}
      {plantToDelete && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1050,
            backdropFilter: "blur(6px)",
          }}
          onClick={() => !isDeleting && setPlantToDelete(null)}
        >
          <div
            className="bg-white rounded-4 shadow-xl p-4 position-relative m-3 text-center"
            style={{ maxWidth: "440px", width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 bg-danger-subtle text-danger"
              style={{ width: "64px", height: "64px" }}
            >
              <i className="fas fa-trash-can fs-3"></i>
            </div>
            <h5 className="fw-bold mb-2">Delete Product?</h5>
            <p className="text-muted small mb-4">
              Are you sure you want to permanently delete <strong>&quot;{plantToDelete.name}&quot;</strong>? This action cannot be undone.
            </p>
            <div className="d-flex gap-2 justify-content-center">
              <button
                type="button"
                className="btn btn-light rounded-pill px-4"
                onClick={() => setPlantToDelete(null)}
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger rounded-pill px-4 fw-semibold"
                onClick={handleDeleteProduct}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* CLEAR DATABASE CONFIRMATION MODAL                              */}
      {/* ============================================================== */}
      {showClearConfirm && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1050,
            backdropFilter: "blur(6px)",
          }}
          onClick={() => !isSeeding && setShowClearConfirm(false)}
        >
          <div
            className="bg-white rounded-4 shadow-xl p-4 position-relative m-3 text-center"
            style={{ maxWidth: "440px", width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 bg-danger-subtle text-danger"
              style={{ width: "64px", height: "64px" }}
            >
              <i className="fas fa-triangle-exclamation fs-3"></i>
            </div>
            <h5 className="fw-bold mb-2">Clear All Products?</h5>
            <p className="text-muted small mb-4">
              This will remove all <strong>{plants.length}</strong> items from your MongoDB database collection.
            </p>
            <div className="d-flex gap-2 justify-content-center">
              <button
                type="button"
                className="btn btn-light rounded-pill px-4"
                onClick={() => setShowClearConfirm(false)}
                disabled={isSeeding}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger rounded-pill px-4 fw-semibold"
                onClick={handleClearDatabase}
                disabled={isSeeding}
              >
                {isSeeding ? "Clearing..." : "Yes, Clear Catalog"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
