"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const steps = [
  "Produkt",
  "Powierzchnia",
  "Termin realizacji",
  "Inne produkty",
  "Dane kontaktowe",
];

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    product: "",
    area: "",
    buildingState: "",
    timeline: "",
    otherProducts: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });

    const newErrors = { ...errors };
    if (field === "product" && value) delete newErrors.product;
    if (field === "area" && value) delete newErrors.area;
    if (field === "name" && value) delete newErrors.name;
    if (field === "email") {
      if (!value) newErrors.email = "Adres e-mail jest wymagany.";
      else if (!/\S+@\S+\.\S+/.test(value)) newErrors.email = "Niepoprawny adres e-mail.";
      else delete newErrors.email;
    }
    if (field === "phone") {
      if (!value) newErrors.phone = "Numer telefonu jest wymagany.";
      else if (!/^\d{9}$/.test(value.replace(/\s/g, "")))
        newErrors.phone = "Wpisz 9-cyfrowy numer telefonu.";
      else delete newErrors.phone;
    }
    setErrors(newErrors);
  };

  const isStepValid = () => {
    if (step === 0) return !!formData.product;
    if (step === 1) return !!formData.area;
    if (step === 4) {
      return (
        !!formData.name &&
        !!formData.email &&
        /\S+@\S+\.\S+/.test(formData.email) &&
        !!formData.phone &&
        /^\d{9}$/.test(formData.phone.replace(/\s/g, ""))
      );
    }
    return true;
  };

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepValid()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-xl p-10 text-center"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          ✅ Dziękujemy!
        </h2>
        <p className="text-gray-600">
          Skontaktujemy się z Tobą najszybciej jak to możliwe. Miłego dnia! 😊
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-10"
    >
      {/* Pasek postępu */}
      <div className="mb-8">
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500"
            style={{ width: `${((step + 0.5) / steps.length) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs font-medium text-gray-500">
          {steps.map((label, i) => (
            <span key={i} className={i === step ? "text-blue-600" : ""}>
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Kroki formularza */}
      <AnimatePresence mode="wait">
        {/* Step 1 */}
        {step === 0 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4"
          >
            <h2 className="text-lg font-semibold">
              1. Wybierz interesujący Cię produkt
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {["Fotowoltaika", "Pompa ciepła", "Magazyn energii", "Klimatyzacja"].map(
                (p) => (
                  <button
                    type="button"
                    key={p}
                    onClick={() => handleChange("product", p)}
                    className={`p-4 rounded-lg border transition cursor-pointer ${
                      formData.product === p
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white hover:bg-gray-100 border-gray-300"
                    }`}
                  >
                    {p}
                  </button>
                )
              )}
            </div>
            {errors.product && (
              <p className="text-red-500 text-sm">{errors.product}</p>
            )}
          </motion.div>
        )}

        {/* Step 2 */}
        {step === 1 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4"
          >
            <h2 className="text-lg font-semibold">2. Powierzchnia i stan budynku</h2>
            <input
              type="number"
              placeholder="Powierzchnia budynku (np. 120 m²)"
              value={formData.area}
              onChange={(e) => handleChange("area", e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
            {errors.area && (
              <p className="text-red-500 text-sm">{errors.area}</p>
            )}
            <div className="flex gap-3">
              {["Nowy", "Modernizowany"].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleChange("buildingState", s)}
                  className={`flex-1 p-3 rounded-lg border transition cursor-pointer ${
                    formData.buildingState === s
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white hover:bg-gray-100 border-gray-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 3 */}
        {step === 2 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4"
          >
            <h2 className="text-lg font-semibold">3. Kiedy planujesz realizację?</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Do 7 dni",
                "Do miesiąca",
                "Do 3 miesięcy",
                "Nie wiem – rozglądam się",
              ].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => handleChange("timeline", t)}
                  className={`p-4 rounded-lg border transition cursor-pointer ${
                    formData.timeline === t
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white hover:bg-gray-100 border-gray-300"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 4 */}
        {step === 3 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4"
          >
            <h2 className="text-lg font-semibold">
              4. Czy interesują Cię dodatkowe produkty?
            </h2>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.otherProducts === "Brak"}
                  onChange={() => handleChange("otherProducts", "Brak")}
                />
                <span>Nie</span>
              </label>
              <input
                type="text"
                placeholder="Tak, jakie?"
                value={formData.otherProducts !== "Brak" ? formData.otherProducts : ""}
                onChange={(e) => handleChange("otherProducts", e.target.value)}
                className="border rounded-lg px-3 py-2"
              />
            </div>
          </motion.div>
        )}

        {/* Step 5 */}
        {step === 4 && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4"
          >
            <h2 className="text-lg font-semibold">5. Twoje dane kontaktowe</h2>
            <input
              type="text"
              placeholder="Imię i nazwisko"
              autoComplete="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <input
              type="email"
              placeholder="Adres e-mail"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <input
              type="tel"
              placeholder="Numer telefonu"
              autoComplete="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 focus:ring-2 ${
                errors.phone
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            <textarea
              placeholder="Dodatkowe informacje (opcjonalne)"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-xs text-gray-500 mt-2">
              🔒 Twoje dane są bezpieczne – nie udostępniamy ich osobom trzecim.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nawigacja */}
      <div className="flex justify-between mt-8">
        {step > 0 && (
          <button
            type="button"
            onClick={prev}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer transition"
          >
            Wstecz
          </button>
        )}
        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={next}
            disabled={!isStepValid()}
            className={`ml-auto px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white transition ${
              isStepValid()
                ? "hover:opacity-90 cursor-pointer"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            Dalej
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting || !isStepValid()}
            className={`ml-auto px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md transition ${
              isSubmitting || !isStepValid()
                ? "opacity-70 cursor-not-allowed"
                : "hover:shadow-lg hover:scale-105 cursor-pointer"
            }`}
          >
            {isSubmitting ? "Wysyłanie..." : "Odbierz bezpłatną wycenę"}
          </button>
        )}
      </div>
    </motion.form>
  );
}
