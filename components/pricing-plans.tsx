"use client"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

interface Plan {
  id: number
  name: string
  price: string
  description: string
  features: string[]
  popular: boolean
}

const plans: Plan[] = [
  {
    id: 1,
    name: "GUERRERO",
    price: "399",
    description: "Perfecto para comenzar tu transformación",
    features: [
      "Acceso al gimnasio",
      "Vestuarios",
      "Duchas",
      "Área de cardio",
      "Zona de pesas libres",
      "Asesoría inicial",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "ESPARTANO",
    price: "499",
    description: "El plan más popular para resultados serios",
    features: [
      "Todo lo del plan Guerrero",
      "Clases grupales ilimitadas",
      "Acceso a zona funcional",
      "Plan de entrenamiento personalizado",
      "Nutrición básica",
      "Descuento en suplementos",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "LEYENDA",
    price: "799",
    description: "Para los que buscan la excelencia absoluta",
    features: [
      "Todo lo del plan Espartano",
      "Entrenador personal (4 sesiones/mes)",
      "Plan nutricional completo",
      "Invitado gratis",
      "Masajes deportivos",
      "Prioridad en reservas",
    ],
    popular: false,
  },
]

export function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handleSelectPlan = (plan: Plan) => {
    // ✅ Guarda en localStorage
    localStorage.setItem("selectedPlanName", plan.name)
    localStorage.setItem("selectedPlanPrice", plan.price)
    setSelectedPlan(plan.name)
  }

  return (
    <section id="planes" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 tracking-wider">
            ELIGE TU BATALLA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecciona el plan que mejor se adapte a tus objetivos y comienza tu transformación hoy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? "border-accent border-2 shadow-xl scale-100 bg-black/10"
                  : "border-black/30"
              } ${selectedPlan === plan.name ? "ring-4 ring-accent" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-secondary px-4 py-1 rounded-full text-sm font-bold">
                  MÁS POPULAR
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-secondary mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-primary">${plan.price}</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/checkout"
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full ${
                    plan.popular
                      ? "bg-accent hover:bg-accent/90 text-secondary hover:cursor-pointer py-3 rounded-lg text-center "
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:cursor-pointer py-3 rounded-lg text-center"
                  }`}
                  
                >
                  {selectedPlan === plan.name ? "Seleccionado ✓" : "Seleccionar Plan"}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
