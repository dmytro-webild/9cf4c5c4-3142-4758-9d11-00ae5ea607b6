"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Globe, Package, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="large"
        background="aurora"
        cardStyle="gradient-mesh"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="ShopCommerce"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Elevate Your Lifestyle"
      description="Discover curated products designed to enhance your daily routine. Quality meets innovation."
      testimonials={[
        {
          name: "Alice G.",
          handle: "@aliceg",
          testimonial: "Excellent service and high-quality products!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/travel-still-life-pack-flat-lay_23-2148837343.jpg?_wi=1",
          imageAlt: "e-commerce products studio shot",
        },
        {
          name: "Mark D.",
          handle: "@markd",
          testimonial: "Everything arrived as expected. Highly recommend.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/adult-reusing-objects-creative-ways_23-2149411780.jpg",
          imageAlt: "e-commerce products studio shot",
        },
        {
          name: "Sarah P.",
          handle: "@sarahp",
          testimonial: "Fast shipping and fantastic customer support.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-workspace-with-female-things_23-2147778845.jpg?_wi=1",
          imageAlt: "e-commerce products studio shot",
        },
        {
          name: "Jessica R.",
          handle: "@jessr",
          testimonial: "Truly the best shopping experience online.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handcrafted-wooden-decorative-vases_23-2151003007.jpg?_wi=1",
          imageAlt: "e-commerce products studio shot",
        },
        {
          name: "David L.",
          handle: "@davidl",
          testimonial: "Impeccable quality and premium packaging.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/retro-computer-technology-with-monitor-hardware_23-2149506841.jpg?_wi=1",
          imageAlt: "e-commerce products studio shot",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/travel-still-life-pack-flat-lay_23-2148837343.jpg?_wi=2"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-employees-looking-laptop-laughing_74855-4007.jpg",
          alt: "Portrait of happy customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/positive-beautiful-asian-girl-advertising-payment_1262-18277.jpg",
          alt: "Portrait business owner",
        },
        {
          src: "http://img.b2bpic.net/free-photo/arrangement-professional-photographer-equipment_23-2149033340.jpg",
          alt: "Cheerful professional headshot",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-beautiful-girl-with-closed-eyes-black-white-wall_176420-8602.jpg",
          alt: "Confident professional man portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-senior-businessman-talking-partner_1262-1998.jpg",
          alt: "Smiling professional portrait",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Our Passion for ",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/adult-reusing-objects-creative-ways_23-2149411780.jpg",
          alt: "Unboxing experience lifestyle",
        },
        {
          type: "text",
          content: " Quality",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        {
          title: "Fast Shipping",
          description: "Global distribution for quick delivery.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-delivery-box-with-wings-flight-set_107791-16698.jpg",
        },
        {
          title: "Secure Payments",
          description: "Safe, protected checkout experience.",
          imageSrc: "http://img.b2bpic.net/free-vector/shield-with-dollar-multiple-styles_78370-8456.jpg",
        },
        {
          title: "Expert Support",
          description: "Always here to help you.",
          imageSrc: "http://img.b2bpic.net/free-photo/facial-recognition-technology-smartphone_23-2151977842.jpg",
        },
      ]}
      title="Why Choose Us"
      description="We put quality first, every single time."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="one-large-left-three-stacked-right"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Ergonomic Chair",
          price: "$299",
          variant: "Default",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-workspace-with-female-things_23-2147778845.jpg?_wi=2",
        },
        {
          id: "p2",
          name: "Minimalist Lamp",
          price: "$89",
          variant: "Matte",
          imageSrc: "http://img.b2bpic.net/free-photo/handcrafted-wooden-decorative-vases_23-2151003007.jpg?_wi=2",
        },
        {
          id: "p3",
          name: "Keyboard",
          price: "$129",
          variant: "RGB",
          imageSrc: "http://img.b2bpic.net/free-photo/retro-computer-technology-with-monitor-hardware_23-2149506841.jpg?_wi=2",
        },
        {
          id: "p4",
          name: "Leather Notebook",
          price: "$45",
          variant: "Premium",
          imageSrc: "http://img.b2bpic.net/free-photo/leather-briefcase_181624-11875.jpg",
        },
        {
          id: "p5",
          name: "Headphones",
          price: "$199",
          variant: "Noise Cancelling",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-blond-female-earphones-isolated-grey-background_613910-9382.jpg",
        },
        {
          id: "p6",
          name: "Coffee Grinder",
          price: "$149",
          variant: "Sleek",
          imageSrc: "http://img.b2bpic.net/free-photo/tool-used-coffee-machine-coffee-making-process_23-2150187522.jpg",
        },
      ]}
      title="Curated Products"
      description="Discover our most popular items."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "s1",
          badge: "Starter",
          price: "$0",
          subtitle: "Basic access",
          buttons: [
            {
              text: "Start Now",
              href: "#",
            },
          ],
          features: [
            "Limited products",
            "Email support",
          ],
        },
        {
          id: "s2",
          badge: "Pro",
          price: "$29",
          subtitle: "Best for power users",
          buttons: [
            {
              text: "Upgrade",
              href: "#",
            },
          ],
          features: [
            "Unlimited products",
            "Priority support",
            "Fast shipping",
          ],
        },
        {
          id: "s3",
          badge: "Enterprise",
          price: "$99",
          subtitle: "Full scale solutions",
          buttons: [
            {
              text: "Contact Us",
              href: "#",
            },
          ],
          features: [
            "Custom dashboard",
            "Dedicated manager",
            "API access",
          ],
        },
      ]}
      title="Simple Pricing"
      description="Flexible plans for every user."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Products Sold",
          value: "50k+",
          icon: Package,
        },
        {
          id: "m2",
          title: "Happy Customers",
          value: "12k+",
          icon: Users,
        },
        {
          id: "m3",
          title: "Countries Shipped",
          value: "120+",
          icon: Globe,
        },
      ]}
      title="Our Impact"
      description="Numbers speak for our performance."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="This shop changed my online shopping experience forever! Everything from selection to shipping is top tier."
      rating={5}
      author="Jessica Reed"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-employees-looking-laptop-laughing_74855-4007.jpg",
          alt: "Jessica",
        },
        {
          src: "http://img.b2bpic.net/free-photo/positive-beautiful-asian-girl-advertising-payment_1262-18277.jpg",
          alt: "Mark",
        },
        {
          src: "http://img.b2bpic.net/free-photo/arrangement-professional-photographer-equipment_23-2149033340.jpg",
          alt: "Alice",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-beautiful-girl-with-closed-eyes-black-white-wall_176420-8602.jpg",
          alt: "David",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-senior-businessman-talking-partner_1262-1998.jpg",
          alt: "Sarah",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you offer returns?",
          content: "Yes, we offer a 30-day return policy.",
        },
        {
          id: "q2",
          title: "How long is shipping?",
          content: "Usually 3-5 business days.",
        },
        {
          id: "q3",
          title: "Do you ship globally?",
          content: "Yes, we ship to over 120 countries.",
        },
      ]}
      title="Frequently Asked"
      description="Everything you need to know."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Stay Updated"
      title="Join Our Newsletter"
      description="Get exclusive deals delivered to your inbox."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Shop",
              href: "#products",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
          ],
        },
        {
          items: [
            {
              label: "Support",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="ShopCommerce"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
