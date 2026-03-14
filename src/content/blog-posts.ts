/**
 * Static blog post list used when Supabase is not configured (e.g. first deploy).
 * Add cover images later to public/blog/<slug>.jpg (or .webp) and they’ll show automatically.
 */

export const STATIC_BLOG_POSTS = [
  { slug: "why-regular-website-design-updates-are-vital-for-your-business", title: "Why Regular Website Design Updates Are Vital for Your Business" },
  { slug: "how-ai-and-automation-can-make-your-business-unstoppable-and-why-you-shouldnt-wait", title: "How AI and Automation Can Make Your Business Unstoppable (and Why You Shouldn't Wait)" },
  { slug: "5-ways-ai-is-transforming-customer-service-for-small-businesses", title: "5 Ways AI is Transforming Customer Service for Small Businesses" },
  { slug: "how-to-automate-your-business-without-losing-the-personal-touch", title: "How to Automate Your Business (Without Losing the Personal Touch)" },
  { slug: "how-consistent-blogging-can-catapult-your-seo-to-the-top-the-secret-to-search-engine-supremacy", title: "How Consistent Blogging Can Catapult Your SEO to the Top: The Secret to Search Engine Supremacy" },
  { slug: "why-chatbots-are-the-ultimate-secret-weapon-for-small-businesses", title: "Why Chatbots Are the Ultimate Secret Weapon for Small Businesses" },
  { slug: "5-signs-your-website-design-is-driving-customers-away-and-how-to-fix-them", title: "5 Signs Your Website Design Is Driving Customers Away (And How to Fix Them)" },
  { slug: "rebranding-and-refreshing-your-website-design-can-transform-your-business", title: "Rebranding and Refreshing Your Website Design Can Transform Your Business" },
  { slug: "the-art-of-conversion-how-effective-web-design-drives-business-growth", title: "The Art of Conversion: How Effective Web Design Drives Business Growth" },
  { slug: "the-power-of-consistent-blogging-why-quality-content-is-key-to-seo-success", title: "The Power of Consistent Blogging: Why Quality Content is Key to SEO Success" },
  { slug: "the-importance-of-a-well-designed-website-for-your-businesss-success", title: "The Importance of a Well-Designed Website for Your Business's Success" },
  { slug: "how-chatbots-can-transform-your-business-a-30-day-free-trial-to-experience-the-future", title: "How Chatbots Can Transform Your Business: A 30-Day Free Trial to Experience the Future" },
  { slug: "why-consistent-blogging-is-key-to-seo-success", title: "Why Consistent Blogging is Key to SEO Success" },
  { slug: "why-your-website-needs-to-do-more-than-look-good", title: "Why Your Website Needs to Do More Than Look Good" },
  { slug: "stop-sabotaging-your-online-presence-5-strategies-to-fix-it-in-2024", title: "Stop Sabotaging Your Online Presence: 5 Strategies to Fix It in 2024" },
  { slug: "no-code-tools-and-web-development", title: "Transform Your Online Presence: Exceptional Website Design Services" },
  { slug: "why-less-is-more-in-web-design", title: "5 Strategic Applications of Custom-Trained Data Chatbots" },
  { slug: "subscription-based-design-solutions-in-2024", title: "Revolutionizing Business: The Power of Custom Data-Trained Chatbot Services" },
  { slug: "why-social-media-is-important-for-brands-in-2024", title: "The Art and Science of Website Design" },
  { slug: "what-s-the-perfect-logo-for-your-business", title: "Mastering the Art of Digital Marketing Strategies: Your Comprehensive Guide" },
  { slug: "how-to-use-ai-effectively", title: "Integrating Modern AI Tools into Day-to-Day Business" },
] as const;

/** Add slugs here when you add a cover image at public/blog/<slug>.<ext> */
export const POSTS_WITH_IMAGES: { slug: string; ext?: "jpg" | "png" | "webp" }[] = [
  { slug: "why-regular-website-design-updates-are-vital-for-your-business", ext: "png" },
  { slug: "how-ai-and-automation-can-make-your-business-unstoppable-and-why-you-shouldnt-wait", ext: "png" },
  { slug: "5-ways-ai-is-transforming-customer-service-for-small-businesses", ext: "png" },
  { slug: "how-to-automate-your-business-without-losing-the-personal-touch", ext: "png" },
  { slug: "how-consistent-blogging-can-catapult-your-seo-to-the-top-the-secret-to-search-engine-supremacy", ext: "png" },
  { slug: "why-chatbots-are-the-ultimate-secret-weapon-for-small-businesses", ext: "png" },
  { slug: "5-signs-your-website-design-is-driving-customers-away-and-how-to-fix-them", ext: "png" },
  { slug: "rebranding-and-refreshing-your-website-design-can-transform-your-business", ext: "png" },
  { slug: "the-art-of-conversion-how-effective-web-design-drives-business-growth", ext: "png" },
  { slug: "the-power-of-consistent-blogging-why-quality-content-is-key-to-seo-success", ext: "png" },
  { slug: "the-importance-of-a-well-designed-website-for-your-businesss-success", ext: "png" },
  { slug: "how-chatbots-can-transform-your-business-a-30-day-free-trial-to-experience-the-future", ext: "png" },
  { slug: "why-consistent-blogging-is-key-to-seo-success", ext: "png" },
  { slug: "why-your-website-needs-to-do-more-than-look-good", ext: "png" },
  { slug: "stop-sabotaging-your-online-presence-5-strategies-to-fix-it-in-2024", ext: "png" },
  { slug: "no-code-tools-and-web-development", ext: "png" },
  { slug: "why-less-is-more-in-web-design", ext: "png" },
  { slug: "subscription-based-design-solutions-in-2024", ext: "png" },
  { slug: "why-social-media-is-important-for-brands-in-2024", ext: "png" },
  { slug: "what-s-the-perfect-logo-for-your-business", ext: "png" },
  { slug: "how-to-use-ai-effectively", ext: "png" },
];
