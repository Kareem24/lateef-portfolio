import {
  ArrowRight,
  Mail,
  ExternalLink,
  Code2,
  ShoppingBag,
  Zap,
  Search,
  Bot,
  Workflow,
  Palette,
  CreditCard,
  TrendingUp,
  Package,
  Send,
  LayoutDashboard,
} from "lucide-react";
import { useState } from "react";

import { toast } from "sonner";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import { Input } from "./components/ui/input";
import havenDeluxeImage from "./assets/projects/haven-deluxe.png";
import heritageDecorImage from "./assets/projects/heritage-decor.png";
import homeLuxuraImage from "./assets/projects/home-luxura.png";
import nordicVogueImage from "./assets/projects/nordic-vogue.png";
import pawfectHavenImage from "./assets/projects/pawfect-haven.png";

const skills = [
  { icon: Palette, label: "Shopify Theme Customization" },
  { icon: Code2, label: "Shopify App Development" },
  { icon: CreditCard, label: "Payment Integration" },
  { icon: TrendingUp, label: "Conversion Rate Optimization" },
  { icon: Package, label: "Product Importation" },
  { icon: Zap, label: "Shopify Marketing" },
  { icon: Search, label: "Product SEO" },
  { icon: Mail, label: "Email Automation" },
  { icon: Workflow, label: "Workflow Automation" },
  { icon: Bot, label: "Chatbot Setup" },
  { icon: ShoppingBag, label: "Logo & Favicon Design" },
];

const projects = [
  {
    name: "Nordic Vogue",
    category: "Clothing Store",
    image: nordicVogueImage,
    description:
      "Built a full-scale Shopify store with curated product catalog, premium theme integration, and a streamlined checkout experience designed to maximize conversions.",
    tags: ["Shopify", "Theme Setup", "Product Import"],
  },
  {
    name: "Pawfect Haven",
    category: "Pet Store",
    image: pawfectHavenImage,
    description:
      "Delivered an end-to-end Shopify build with optimized product imports, premium theme customization, and a brand-aligned storefront for a pet retail business.",
    tags: ["Shopify", "Storefront", "CRO"],
  },
  {
    name: "Haven Deluxe",
    category: "Home Accessories",
    image: havenDeluxeImage,
    description:
      "Launched a polished home accessories store with curated collections, premium theme configuration, and a clean, conversion-focused product browsing flow.",
    tags: ["Shopify", "Theme Setup", "UX"],
  },
  {
    name: "Home Lucxora",
    category: "Home Accessories",
    image: homeLuxuraImage,
    description:
      "Designed and built a complete Shopify storefront with product catalog setup, premium theme integration, and a mobile-first shopping experience.",
    tags: ["Shopify", "Mobile-first", "Product Import"],
  },
  {
    name: "Heritage Decor",
    category: "Electronics Store",
    image: heritageDecorImage,
    description:
      "Built a full Shopify store from scratch for an electronics brand with product importation, premium theme setup, and a refined checkout journey.",
    tags: ["Shopify", "Storefront", "Checkout"],
  },
];

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          olaitan<span className="text-primary">.</span>dev
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="#skills" className="transition-colors hover:text-foreground">
            Skills
          </a>
          <a href="#work" className="transition-colors hover:text-foreground">
            Work
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>
        <Button asChild size="sm" variant="default">
          <a href="#contact">Hire Me</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 400px at 50% -10%, color-mix(in oklab, var(--color-primary) 12%, transparent), transparent)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        <div className="animate-fade-up max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Available for remote roles
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            Olaitan Abdullateef
          </h1>
          <p className="mt-3 font-mono text-sm text-primary md:text-base">
            Shopify Developer / E-commerce Specialist
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            I build high-converting Shopify stores and optimize e-commerce
            experiences that help brands grow online — from theme customization
            to checkout performance.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#work">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            01 / About
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Building stores that sell.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-2 md:text-lg">
          <p>
            I'm a Shopify developer with hands-on freelance experience building,
            customizing, and optimizing online stores across multiple niches —
            fashion, pets, home, and electronics. My focus is the full
            lifecycle: from initial store setup and theme customization to
            performance and conversion-rate optimization.
          </p>
          <p>
            I work remotely with founders and teams worldwide, communicating
            clearly across time zones and shipping work on predictable
            timelines. Whether it's launching a new storefront or improving an
            existing one, I care about clean execution and measurable e-commerce
            growth.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            02 / Skills
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            What I do best.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A focused toolkit for building, launching, and scaling Shopify
            stores.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((s) => (
            <div
              key={s.label}
              className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <s.icon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              03 / Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Selected freelance projects.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Shopify storefronts built end-to-end for real brands.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <div>
                <div className="mb-6 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg border border-border bg-secondary/60">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.name} storefront preview`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {p.name} preview
                    </span>
                  )}
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">
                      0{i + 1} — {p.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                      {p.name}
                    </h3>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent — I'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 600);
  };

  return (
    <section id="contact" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            04 / Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Let's build something that converts.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Open to remote roles, contract work, and freelance Shopify projects.
            I usually respond within 24 hours.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <a
              href="mailto:abdullateefe02@gmail.com"
              className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              abdullateefe02@gmail.com
            </a>
            {/* <a */}
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <LayoutDashboard className="h-4 w-4" />
              linkedin.com/in/yourprofile
            {/* </a> */}
            {/* <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <LayoutDashboard className="h-4 w-4" />
              github.com/yourusername
            </a> */}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-xl border border-border bg-card p-7"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project or role..."
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              "Sending..."
            ) : (
              <>
                Send Message <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Olaitan Abdullateef. All rights reserved.
        </p>
        <p className="font-mono">Shopify Developer · Remote</p>
      </div>
    </footer>
  );
}
