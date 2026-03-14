import Image from "next/image";
import Link from "next/link";

type Project = {
  slug: string;
  name: string;
  description: string;
};

const projects: Project[] = [
  {
    slug: "bakery",
    name: "Bakery",
    description:
      "Leverage creativity to craft mouthwatering designs, engaging layouts, and irresistible visuals.",
  },
  {
    slug: "auto-dealer",
    name: "Auto Dealer",
    description:
      "Streamlined, user-friendly platform for browsing, buying, and financing vehicles with a modern, intuitive design.",
  },
  {
    slug: "yoga-studio",
    name: "Yoga Studio",
    description:
      "A serene, easy-to-navigate platform for discovering class schedules, booking sessions, and exploring wellness resources in a calming and visually appealing environment.",
  },
  {
    slug: "home-furniture",
    name: "Home Furniture",
    description:
      "Features a stylish and user-friendly interface for browsing, selecting, and purchasing a wide range of furniture and home décor items to suit various tastes and needs.",
  },
  {
    slug: "landscape",
    name: "Landscape",
    description:
      "A clean, accessible platform for exploring and booking a variety of landscaping solutions, from design and installation to maintenance and upgrades, tailored to enhance outdoor spaces.",
  },
  {
    slug: "coffee-shop",
    name: "Coffee Shop",
    description:
      "A cozy, inviting experience for exploring the menu, ordering beverages and snacks, and learning about the shop's unique atmosphere and offerings.",
  },
];

const bakerySections = [
  {
    title: "1. Color Scheme",
    subs: [
      {
        heading: "Warm, Inviting Colors",
        body: "The bakery site uses a palette of warm and inviting colors like soft browns, cream, and pastel pinks. These colors evoke the warmth and coziness associated with baked goods, making the site feel approachable and welcoming.",
      },
      {
        heading: "Accent Colors",
        body: "Bright accent colors, such as golden yellow or red, are used sparingly to highlight important elements like calls to action (e.g., \"Order Now\" buttons) or promotional banners.",
      },
    ],
  },
  {
    title: "2. Typography",
    subs: [
      {
        heading: "Friendly, Handwritten Fonts",
        body: "A combination of serif fonts for headings and a more playful, handwritten-style font for subheadings and special text areas (like product names) gives the site a friendly and artisanal feel, reflecting the handmade nature of the bakery's products.",
      },
      {
        heading: "Legibility",
        body: "Body text is kept clean and highly readable, using a simple sans-serif font in a dark color for easy reading against lighter backgrounds.",
      },
    ],
  },
  {
    title: "3. Layout and Structure",
    subs: [
      {
        heading: "Hero Section",
        body: "The homepage features a full-width hero section with an image slider showcasing the bakery's best offerings (e.g., cakes, pastries, and bread). The hero images are accompanied by overlay text with a strong, clear value proposition (e.g., \"Freshly Baked Daily\").",
      },
      {
        heading: "Grid Layout for Products",
        body: "The site uses a clean grid layout to display bakery items, making it easy for visitors to browse through products. Each product card includes a high-quality image, product name, price, and a brief description.",
      },
      {
        heading: "Sticky Navigation",
        body: "A sticky navigation bar ensures that users can easily access different sections of the site (e.g., Menu, About Us, Contact) as they scroll down the page.",
      },
    ],
  },
  {
    title: "4. Imagery",
    subs: [
      {
        heading: "High-Quality, Mouth-Watering Images",
        body: "The design heavily relies on high-quality, close-up images of the bakery products to entice customers. The imagery is central to the design, capturing the texture, color, and freshness of the baked goods.",
      },
      {
        heading: "Lifestyle Shots",
        body: "In addition to product images, lifestyle shots showing people enjoying the bakery's offerings create a sense of community and satisfaction, encouraging customers to make a purchase.",
      },
    ],
  },
  {
    title: "5. User Experience (UX)",
    subs: [
      {
        heading: "Easy Navigation",
        body: "The site is structured for easy navigation, with clear categories for different types of products (e.g., Cakes, Bread, Pastries). A search bar is available at the top for users who know exactly what they're looking for.",
      },
      {
        heading: "Quick Order and Delivery Information",
        body: "A prominent \"Order Now\" button is consistently visible, leading to a streamlined checkout process. Information on delivery options and times is clearly displayed, reducing any potential friction in the buying process.",
      },
      {
        heading: "Mobile Responsiveness",
        body: "The site is fully responsive, ensuring that it looks and functions well on all devices, from desktops to smartphones. This is crucial for reaching customers who may be browsing while on the go.",
      },
    ],
  },
  {
    title: "6. Branding and Identity",
    subs: [
      {
        heading: "Consistent Branding",
        body: "The bakery's logo, colors, and typography are consistently applied throughout the site, reinforcing brand identity and recognition.",
      },
      {
        heading: "Storytelling",
        body: "An \"About Us\" section tells the story of the bakery, its origins, and its commitment to quality, connecting emotionally with customers and building trust.",
      },
    ],
  },
  {
    title: "7. Call to Action (CTA)",
    subs: [
      {
        heading: "Prominent CTAs",
        body: "Buttons like \"Order Now,\" \"View Menu,\" and \"Subscribe to Newsletter\" are strategically placed throughout the site to guide users toward taking action. These buttons stand out visually but are harmoniously integrated into the design.",
      },
    ],
  },
  {
    title: "8. Footer",
    subs: [
      {
        heading: "Informative Footer",
        body: "The footer includes essential information such as contact details, opening hours, social media links, and a sign-up form for the bakery's newsletter. It also features quick links to important pages like the FAQ and terms of service.",
      },
    ],
  },
  {
    title: "9. Animation and Interactivity",
    subs: [
      {
        heading: "Subtle Animations",
        body: "Hover effects on product images and buttons, as well as smooth scrolling, add a layer of interactivity to the site, enhancing the user experience without being distracting.",
      },
    ],
  },
];

const autoDealerSections = [
  {
    title: "1. Color Scheme",
    subs: [
      {
        heading: "Modern, Professional Colors",
        body: "The auto dealer site employs a sleek palette of cool, professional colors like metallic blues, grays, and whites. These colors evoke a sense of reliability and sophistication, aligning with the automotive industry's focus on quality and performance.",
      },
      {
        heading: "Accent Colors",
        body: "Bold accent colors, such as vibrant reds or bright oranges, are used strategically to draw attention to key elements like call-to-action buttons (e.g., \"Schedule Test Drive\") and promotional banners.",
      },
    ],
  },
  {
    title: "2. Typography",
    subs: [
      {
        heading: "Bold, Modern Fonts",
        body: "A combination of strong, modern sans-serif fonts for headings and a clean, legible typeface for body text gives the site a contemporary, authoritative feel, reflecting the cutting-edge nature of the automotive world.",
      },
      {
        heading: "Legibility",
        body: "Body text is kept straightforward and readable, using a simple sans-serif font in a dark color for easy readability against lighter backgrounds.",
      },
    ],
  },
  {
    title: "3. Layout and Structure",
    subs: [
      {
        heading: "Hero Section",
        body: "The homepage features a full-width hero section with a high-resolution image slider showcasing the latest car models and promotions. The hero images are paired with overlay text highlighting key selling points (e.g., \"New Arrivals\" or \"Exclusive Offers\").",
      },
      {
        heading: "Grid Layout for Inventory",
        body: "The site uses a grid layout to display vehicle listings, making it easy for visitors to browse through available models. Each listing includes a high-quality image, vehicle name, price, and a brief description.",
      },
      {
        heading: "Sticky Navigation",
        body: "A sticky navigation bar ensures that users can effortlessly access various sections of the site (e.g., Inventory, Financing, Contact Us) as they scroll.",
      },
    ],
  },
  {
    title: "4. Imagery",
    subs: [
      {
        heading: "High-Quality, Dynamic Images",
        body: "The design relies on high-quality images of vehicles in different settings (e.g., on the road, in showroom environments) to attract and engage customers. These images highlight the features and aesthetics of the cars.",
      },
      {
        heading: "Lifestyle Shots",
        body: "In addition to vehicle images, lifestyle shots depicting people enjoying their cars add a personal touch, helping potential buyers envision themselves with the vehicles.",
      },
    ],
  },
  {
    title: "5. User Experience (UX)",
    subs: [
      {
        heading: "Easy Navigation",
        body: "The site is designed for smooth navigation, with clear categories for different types of vehicles (e.g., Sedans, SUVs, Trucks). A search bar is prominently placed for users who have specific models in mind.",
      },
      {
        heading: "Streamlined Purchase Process",
        body: "A prominent \"Schedule Test Drive\" button is always visible, leading to an easy-to-follow scheduling system. Information on financing options and trade-in evaluations is clearly accessible, simplifying the buying process.",
      },
      {
        heading: "Mobile Responsiveness",
        body: "The site is fully responsive, ensuring that it functions well on all devices, from desktops to smartphones. This is essential for reaching users who may be browsing from various locations.",
      },
    ],
  },
  {
    title: "6. Branding and Identity",
    subs: [
      {
        heading: "Consistent Branding",
        body: "The dealer's logo, color scheme, and typography are consistently applied throughout the site, reinforcing brand identity and fostering recognition.",
      },
      {
        heading: "Storytelling",
        body: "An \"About Us\" section narrates the dealership's history, values, and commitment to customer satisfaction, creating a connection with visitors and building trust.",
      },
    ],
  },
  {
    title: "7. Call to Action (CTA)",
    subs: [
      {
        heading: "Prominent CTAs",
        body: "Buttons like \"Schedule Test Drive,\" \"Get Financing,\" and \"Contact Us\" are strategically placed to guide users towards key actions. These buttons are designed to stand out visually while integrating seamlessly into the overall design.",
      },
    ],
  },
  {
    title: "8. Footer",
    subs: [
      {
        heading: "Informative Footer",
        body: "The footer includes essential details such as contact information, dealership hours, social media links, and a newsletter sign-up form. It also features quick links to important pages like the FAQ and privacy policy.",
      },
    ],
  },
  {
    title: "9. Animation and Interactivity",
    subs: [
      {
        heading: "Subtle Animations",
        body: "Hover effects on vehicle images and interactive elements, along with smooth transitions, enhance the user experience without being overwhelming. These subtle animations provide a polished and engaging browsing experience.",
      },
    ],
  },
];

const yogaStudioSections = [
  {
    title: "1. Color Scheme",
    subs: [
      {
        heading: "Serene, Natural Colors",
        body: "The yoga studio site employs a calming palette of earthy tones like soft greens, warm beiges, and gentle blues. These colors evoke a sense of tranquility and balance, aligning with the yoga studio's focus on wellness and relaxation.",
      },
      {
        heading: "Accent Colors",
        body: "Subtle accent colors, such as muted golds or rich terracottas, are used sparingly to highlight key elements like class schedules or special offers. These accents add warmth and visual interest without overwhelming the serene aesthetic.",
      },
    ],
  },
  {
    title: "2. Typography",
    subs: [
      {
        heading: "Elegant, Readable Fonts",
        body: "A combination of elegant, serif fonts for headings and a clean, sans-serif typeface for body text gives the site a refined, approachable feel. This typography choice reflects the holistic and calming nature of yoga.",
      },
      {
        heading: "Legibility",
        body: "Body text is presented in a straightforward sans-serif font, ensuring ease of reading. Font sizes and line spacing are optimized for readability, providing a comfortable reading experience against soft, contrasting backgrounds.",
      },
    ],
  },
  {
    title: "3. Layout and Structure",
    subs: [
      {
        heading: "Hero Section",
        body: "The homepage features a full-width hero section with a calming high-resolution image or video slider, showcasing serene yoga poses or peaceful studio environments. Overlay text might highlight key offerings such as \"New Classes\" or \"Special Workshops.\"",
      },
      {
        heading: "Class Schedule Grid",
        body: "The site uses a clean grid layout to display class schedules and instructor information. Each entry includes a class name, time, and a brief description, making it easy for visitors to find and book classes.",
      },
      {
        heading: "Sticky Navigation",
        body: "A sticky navigation bar ensures that users can effortlessly access various sections of the site (e.g., Class Schedule, About Us, Contact) as they scroll, maintaining ease of navigation throughout the site.",
      },
    ],
  },
  {
    title: "4. Imagery",
    subs: [
      {
        heading: "High-Quality, Peaceful Images",
        body: "The design relies on high-quality images of serene yoga poses, tranquil studio settings, and natural landscapes to evoke a sense of peace and mindfulness. These images aim to connect visitors with the calming essence of yoga.",
      },
      {
        heading: "Lifestyle Shots",
        body: "In addition to yoga poses and studio images, lifestyle shots featuring diverse individuals practicing yoga or meditating add a personal touch, helping potential clients visualize their own wellness journey.",
      },
    ],
  },
  {
    title: "5. User Experience (UX)",
    subs: [
      {
        heading: "Easy Navigation",
        body: "The site is designed for smooth navigation, with clear categories for different types of classes (e.g., Yoga Basics, Advanced Flow, Meditation). A search bar is available for users looking for specific class types or instructors.",
      },
      {
        heading: "Streamlined Booking Process",
        body: "A prominent \"Book a Class\" button is always visible, leading to an easy-to-follow class reservation system. Information on membership options and class packages is clearly accessible, simplifying the enrollment process.",
      },
      {
        heading: "Mobile Responsiveness",
        body: "The site is fully responsive, ensuring that it functions seamlessly on all devices, from desktops to smartphones. This ensures that users can easily browse schedules and book classes from anywhere.",
      },
    ],
  },
  {
    title: "6. Branding and Identity",
    subs: [
      {
        heading: "Consistent Branding",
        body: "The studio's logo, color scheme, and typography are consistently applied throughout the site, reinforcing brand identity and fostering recognition. This cohesive branding helps build trust and familiarity with visitors.",
      },
      {
        heading: "Storytelling",
        body: "An \"About Us\" section shares the studio's philosophy, values, and the story behind its founding. This narrative creates a personal connection with visitors, helping them understand the studio's mission and approach to yoga.",
      },
    ],
  },
  {
    title: "7. Call to Action (CTA)",
    subs: [
      {
        heading: "Prominent CTAs",
        body: "Buttons like \"Book a Class,\" \"Join Our Community,\" and \"Contact Us\" are strategically placed to guide users towards key actions. These buttons are designed to stand out visually while maintaining harmony with the overall design.",
      },
    ],
  },
  {
    title: "8. Footer",
    subs: [
      {
        heading: "Informative Footer",
        body: "The footer includes essential details such as contact information, studio hours, social media links, and a newsletter sign-up form. It also features quick links to important pages like the FAQ and privacy policy.",
      },
    ],
  },
  {
    title: "9. Animation and Interactivity",
    subs: [
      {
        heading: "Subtle Animations",
        body: "Gentle hover effects on buttons and interactive elements, along with smooth transitions, enhance the user experience without disrupting the serene atmosphere. These subtle animations provide a polished and engaging browsing experience.",
      },
    ],
  },
];

const homeFurnitureSections = [
  {
    title: "1. Color Scheme",
    subs: [
      {
        heading: "Elegant, Neutral Colors",
        body: "The home furniture site employs a sophisticated palette of neutral tones like soft grays, warm beiges, and muted whites. These colors create a clean, inviting backdrop that highlights the furniture pieces and evokes a sense of modern elegance.",
      },
      {
        heading: "Accent Colors",
        body: "Rich accent colors, such as deep blues or earthy greens, are used sparingly to draw attention to key elements like promotions, new arrivals, or featured collections. These accents add a touch of sophistication and visual interest without overwhelming the primary color scheme.",
      },
    ],
  },
  {
    title: "2. Typography",
    subs: [
      {
        heading: "Modern, Stylish Fonts",
        body: "A combination of sleek, modern sans-serif fonts for headings and a classic serif typeface for body text gives the site a contemporary yet timeless feel. This choice reflects the high-quality and stylish nature of the furniture offerings.",
      },
      {
        heading: "Legibility",
        body: "Body text is kept clear and readable with a clean sans-serif font, ensuring ease of reading against soft background colors. Font sizes and spacing are optimized for a comfortable and effortless reading experience.",
      },
    ],
  },
  {
    title: "3. Layout and Structure",
    subs: [
      {
        heading: "Hero Section",
        body: "The homepage features a full-width hero section with high-resolution images or a video slider showcasing curated furniture settings or seasonal collections. Overlay text highlights key themes such as \"New Arrivals\" or \"Limited-Time Offers.\"",
      },
      {
        heading: "Product Grid Layout",
        body: "The site uses a grid layout to display furniture categories and individual product listings. Each listing includes a high-quality image, product name, price, and a brief description, making it easy for visitors to browse and select items.",
      },
      {
        heading: "Sticky Navigation",
        body: "A sticky navigation bar ensures that users can easily access various sections of the site (e.g., Living Room, Bedroom, Dining, Sale) as they scroll. This feature helps maintain a smooth and intuitive browsing experience.",
      },
    ],
  },
  {
    title: "4. Imagery",
    subs: [
      {
        heading: "High-Quality, Inviting Images",
        body: "The design relies on high-resolution images of furniture in beautifully styled settings. These images showcase the products in real-life scenarios, helping visitors envision how the furniture might look in their own homes.",
      },
      {
        heading: "Lifestyle Shots",
        body: "In addition to product images, lifestyle shots featuring different home environments and decor styles add a personal touch. These images help potential buyers visualize the furniture in various contexts, enhancing their shopping experience.",
      },
    ],
  },
  {
    title: "5. User Experience (UX)",
    subs: [
      {
        heading: "Easy Navigation",
        body: "The site is designed for seamless navigation, with clear categories for different furniture types (e.g., Sofas, Beds, Tables). A search bar is prominently placed for users who have specific items or styles in mind.",
      },
      {
        heading: "Streamlined Purchase Process",
        body: "A prominent \"Add to Cart\" button is always visible, leading to an easy-to-follow checkout process. Detailed product information, including dimensions and materials, is readily available, helping users make informed purchasing decisions.",
      },
      {
        heading: "Mobile Responsiveness",
        body: "The site is fully responsive, ensuring that it functions well on all devices, from desktops to smartphones. This adaptability is crucial for reaching users who may be shopping from various locations.",
      },
    ],
  },
  {
    title: "6. Branding and Identity",
    subs: [
      {
        heading: "Consistent Branding",
        body: "The store's logo, color scheme, and typography are consistently applied throughout the site, reinforcing brand identity and fostering recognition. This cohesive branding helps build trust and familiarity with visitors.",
      },
      {
        heading: "Storytelling",
        body: "An \"About Us\" section shares the brand's history, values, and commitment to quality. This narrative creates a connection with visitors, providing insight into the brand's mission and the craftsmanship behind the furniture.",
      },
    ],
  },
  {
    title: "7. Call to Action (CTA)",
    subs: [
      {
        heading: "Prominent CTAs",
        body: "Buttons like \"Shop Now,\" \"Explore Collections,\" and \"Contact Us\" are strategically placed to guide users towards key actions. These buttons are designed to stand out visually while integrating seamlessly into the overall design.",
      },
    ],
  },
  {
    title: "8. Footer",
    subs: [
      {
        heading: "Informative Footer",
        body: "The footer includes essential details such as contact information, store hours, social media links, and a newsletter sign-up form. It also features quick links to important pages like the FAQ, return policy, and privacy policy.",
      },
    ],
  },
  {
    title: "9. Animation and Interactivity",
    subs: [
      {
        heading: "Subtle Animations",
        body: "Smooth hover effects on product images and interactive elements, along with gentle transitions, enhance the user experience without being distracting. These subtle animations provide a polished and engaging browsing experience.",
      },
    ],
  },
];

const landscapeSections = [
  {
    title: "1. Color Scheme",
    subs: [
      {
        heading: "Natural, Earthy Colors",
        body: "The landscape services site uses a palette of natural, earthy tones such as lush greens, rich browns, and soft grays. These colors reflect the outdoor environment and evoke a sense of harmony and connection with nature.",
      },
      {
        heading: "Accent Colors",
        body: "Vibrant accent colors, such as sunny yellows or deep blues, are used selectively to highlight key elements like special promotions, service highlights, or seasonal offers. These accents provide visual interest and draw attention to important features.",
      },
    ],
  },
  {
    title: "2. Typography",
    subs: [
      {
        heading: "Elegant, Readable Fonts",
        body: "A combination of stylish serif fonts for headings and clean sans-serif typefaces for body text gives the site a professional and approachable feel. This typography choice reflects the quality and expertise of the landscaping services.",
      },
      {
        heading: "Legibility",
        body: "Body text is kept clear and legible with a simple sans-serif font in a dark color, ensuring readability against lighter background colors. Font sizes and spacing are optimized for easy reading and a pleasant browsing experience.",
      },
    ],
  },
  {
    title: "3. Layout and Structure",
    subs: [
      {
        heading: "Hero Section",
        body: "The homepage features a full-width hero section with a high-resolution image or video slider showcasing beautiful landscapes or completed projects. Overlay text highlights key services or seasonal promotions such as \"Transform Your Garden\" or \"Spring Specials.\"",
      },
      {
        heading: "Service Grid Layout",
        body: "The site uses a grid layout to display various landscaping services. Each service listing includes a high-quality image, service name, brief description, and a link to more detailed information. This layout makes it easy for visitors to browse and explore available services.",
      },
      {
        heading: "Sticky Navigation",
        body: "A sticky navigation bar ensures users can easily access different sections of the site (e.g., Services, Portfolio, About Us, Contact) as they scroll. This feature maintains smooth and intuitive navigation throughout the site.",
      },
    ],
  },
  {
    title: "4. Imagery",
    subs: [
      {
        heading: "High-Quality, Inspiring Images",
        body: "The design relies on high-resolution images of beautifully landscaped gardens, yards, and outdoor spaces. These images showcase the results of the landscaping services and inspire visitors by illustrating the potential transformations.",
      },
      {
        heading: "Before and After Shots",
        body: "In addition to finished project images, before-and-after photos highlight the impact of the landscaping services. These comparisons demonstrate the effectiveness of the services and provide tangible evidence of their value.",
      },
    ],
  },
  {
    title: "5. User Experience (UX)",
    subs: [
      {
        heading: "Easy Navigation",
        body: "The site is designed for straightforward navigation, with clear categories for different services (e.g., Lawn Care, Hardscaping, Garden Design). A search bar is available for users looking for specific services or projects.",
      },
      {
        heading: "Streamlined Contact Process",
        body: "A prominent \"Request a Quote\" or \"Schedule a Consultation\" button is always visible, leading to an easy-to-follow contact form or booking system. Detailed information on service areas and pricing is clearly accessible, simplifying the inquiry process.",
      },
      {
        heading: "Mobile Responsiveness",
        body: "The site is fully responsive, ensuring that it functions well on all devices, from desktops to smartphones. This ensures that users can easily browse services, view portfolios, and contact the company from anywhere.",
      },
    ],
  },
  {
    title: "6. Branding and Identity",
    subs: [
      {
        heading: "Consistent Branding",
        body: "The company's logo, color scheme, and typography are consistently applied throughout the site, reinforcing brand identity and fostering recognition. This cohesive branding helps build trust and credibility with visitors.",
      },
      {
        heading: "Storytelling",
        body: "An \"About Us\" section shares the company's history, values, and commitment to quality landscaping. This narrative builds a connection with visitors and provides insight into the company's expertise and approach to landscaping projects.",
      },
    ],
  },
  {
    title: "7. Call to Action (CTA)",
    subs: [
      {
        heading: "Prominent CTAs",
        body: "Buttons like \"Get a Quote,\" \"View Portfolio,\" and \"Contact Us\" are strategically placed to guide users towards key actions. These buttons are designed to stand out visually while integrating seamlessly into the overall design.",
      },
    ],
  },
  {
    title: "8. Footer",
    subs: [
      {
        heading: "Informative Footer",
        body: "The footer includes essential details such as contact information, service areas, social media links, and a newsletter sign-up form. It also features quick links to important pages like the FAQ, terms of service, and privacy policy.",
      },
    ],
  },
  {
    title: "9. Animation and Interactivity",
    subs: [
      {
        heading: "Subtle Animations",
        body: "Gentle hover effects on images and interactive elements, along with smooth transitions, enhance the user experience without being distracting. These subtle animations provide a polished and engaging browsing experience.",
      },
    ],
  },
];

const coffeeShopSections = [
  {
    title: "1. Color Scheme",
    subs: [
      {
        heading: "Warm, Inviting Colors",
        body: "The coffee shop site employs a palette of warm, inviting colors like rich browns, creamy beiges, and soft tans. These colors evoke the cozy, comforting atmosphere of a coffee shop and highlight the warmth and richness of the coffee experience.",
      },
      {
        heading: "Accent Colors",
        body: "Vibrant accent colors, such as deep reds or lively oranges, are used selectively to draw attention to key elements like featured drinks, special promotions, or call-to-action buttons. These accents add a pop of energy and visual interest.",
      },
    ],
  },
  {
    title: "2. Typography",
    subs: [
      {
        heading: "Friendly, Stylish Fonts",
        body: "A combination of stylish, serif fonts for headings and a clean, legible sans-serif typeface for body text creates a friendly and approachable feel. This typography choice reflects the inviting nature of the coffee shop and the quality of its offerings.",
      },
      {
        heading: "Legibility",
        body: "Body text is presented in a straightforward sans-serif font in a dark color, ensuring clarity and readability against lighter background colors. Font sizes and spacing are optimized to make the content easy to read and navigate.",
      },
    ],
  },
  {
    title: "3. Layout and Structure",
    subs: [
      {
        heading: "Hero Section",
        body: "The homepage features a full-width hero section with a high-resolution image or video slider showcasing steaming coffee cups, freshly baked pastries, or the cozy interior of the shop. Overlay text highlights key offerings such as \"Seasonal Specials\" or \"New Menu Items.\"",
      },
      {
        heading: "Menu Grid Layout",
        body: "The site uses a clean grid layout to display the menu items, including coffee drinks, pastries, and other offerings. Each item includes a high-quality image, name, description, and price, making it easy for visitors to browse and choose.",
      },
      {
        heading: "Sticky Navigation",
        body: "A sticky navigation bar ensures that users can easily access various sections of the site (e.g., Menu, About Us, Events, Contact) as they scroll. This feature maintains smooth and intuitive navigation throughout the site.",
      },
    ],
  },
  {
    title: "4. Imagery",
    subs: [
      {
        heading: "High-Quality, Appetizing Images",
        body: "The design relies on high-resolution images of coffee, pastries, and the coffee shop's interior. These images create a mouth-watering visual appeal and help visitors experience the atmosphere and quality of the coffee shop.",
      },
      {
        heading: "Lifestyle Shots",
        body: "In addition to product images, lifestyle shots featuring people enjoying coffee or socializing in the shop add a personal touch. These images help potential customers envision their own experience and connection with the coffee shop.",
      },
    ],
  },
  {
    title: "5. User Experience (UX)",
    subs: [
      {
        heading: "Easy Navigation",
        body: "The site is designed for straightforward navigation, with clear categories for different menu items (e.g., Espresso Drinks, Pastries, Sandwiches). A search bar is available for users looking for specific items or specials.",
      },
      {
        heading: "Streamlined Ordering Process",
        body: "A prominent \"Order Online\" or \"View Menu\" button is always visible, leading to an easy-to-follow ordering system. Information on seasonal specials, loyalty programs, and store locations is clearly accessible, simplifying the customer experience.",
      },
      {
        heading: "Mobile Responsiveness",
        body: "The site is fully responsive, ensuring that it functions well on all devices, from desktops to smartphones. This ensures that users can easily browse the menu, place orders, and find store information from anywhere.",
      },
    ],
  },
  {
    title: "6. Branding and Identity",
    subs: [
      {
        heading: "Consistent Branding",
        body: "The coffee shop's logo, color scheme, and typography are consistently applied throughout the site, reinforcing brand identity and fostering recognition. This cohesive branding helps build trust and a sense of familiarity with visitors.",
      },
      {
        heading: "Storytelling",
        body: "An \"About Us\" section shares the coffee shop's story, values, and commitment to quality. This narrative creates a connection with visitors, providing insight into the shop's origins, philosophy, and approach to coffee.",
      },
    ],
  },
  {
    title: "7. Call to Action (CTA)",
    subs: [
      {
        heading: "Prominent CTAs",
        body: "Buttons like \"Order Now,\" \"View Menu,\" and \"Contact Us\" are strategically placed to guide users towards key actions. These buttons are designed to stand out visually while integrating seamlessly into the overall design.",
      },
    ],
  },
  {
    title: "8. Footer",
    subs: [
      {
        heading: "Informative Footer",
        body: "The footer includes essential details such as contact information, store hours, social media links, and a newsletter sign-up form. It also features quick links to important pages like the FAQ, privacy policy, and terms of service.",
      },
    ],
  },
  {
    title: "9. Animation and Interactivity",
    subs: [
      {
        heading: "Subtle Animations",
        body: "Gentle hover effects on images and interactive elements, along with smooth transitions, enhance the user experience without being overwhelming. These subtle animations provide a polished and engaging browsing experience.",
      },
    ],
  },
];

function ProjectCaseStudyPage({
  title,
  tagline,
  imageSrc,
  imageAlt,
  sections,
}: {
  title: string;
  tagline: string;
  imageSrc?: string | null;
  imageAlt?: string;
  sections: typeof bakerySections;
}) {
  return (
    <div className="min-h-full bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 sm:pt-16 lg:px-8">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200/80">
            Project
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-lg text-slate-200/90">{tagline}</p>
        </header>
        {imageSrc && (
          <figure className="mb-14 overflow-hidden rounded-xl border border-white/10 shadow-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt ?? ""}
              width={1200}
              height={800}
              className="w-full object-cover object-top"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </figure>
        )}
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                {section.title}
              </h2>
              <div className="mt-6 space-y-6">
                {section.subs.map((sub) => (
                  <div key={sub.heading}>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-200/90">
                      {sub.heading}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                      {sub.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-16 border-t border-white/10 pt-8">
          <Link href="/projects" className="text-sm text-sky-200/90 hover:text-sky-100">
            ← Back to projects
          </Link>
        </div>
      </div>
    </div>
  );
}

function BakeryProjectPage() {
  return (
    <ProjectCaseStudyPage
      title="Project Bakery."
      tagline="Innovate, Enhance, Succeed."
      sections={bakerySections}
    />
  );
}

function AutoDealerProjectPage() {
  return (
    <ProjectCaseStudyPage
      title="Project Auto Dealer."
      tagline="Innovate, Enhance, Succeed."
      sections={autoDealerSections}
    />
  );
}

function YogaStudioProjectPage() {
  return (
    <ProjectCaseStudyPage
      title="Project Yoga Studio."
      tagline="Innovate, Enhance, Succeed."
      sections={yogaStudioSections}
    />
  );
}

function HomeFurnitureProjectPage() {
  return (
    <ProjectCaseStudyPage
      title="Project Home Furniture."
      tagline="Innovate, Enhance, Succeed."
      sections={homeFurnitureSections}
    />
  );
}

function LandscapeProjectPage() {
  return (
    <ProjectCaseStudyPage
      title="Project Landscape."
      tagline="Innovate, Enhance, Succeed."
      sections={landscapeSections}
    />
  );
}

function CoffeeShopProjectPage() {
  return (
    <ProjectCaseStudyPage
      title="Project Coffee Shop."
      tagline="Innovate, Enhance, Succeed."
      sections={coffeeShopSections}
    />
  );
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-full bg-slate-950 text-slate-50">
        <div className="mx-auto max-w-3xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold tracking-tight">Project not found</h1>
          <p className="mt-2 text-sm text-slate-200/80">
            This project doesn&apos;t exist yet in the new Next.js version of your
            site.
          </p>
          <Link href="/projects" className="mt-4 inline-block text-sm text-sky-200 hover:text-sky-100">
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  if (slug === "bakery") {
    return <BakeryProjectPage />;
  }

  if (slug === "auto-dealer") {
    return <AutoDealerProjectPage />;
  }

  if (slug === "yoga-studio") {
    return <YogaStudioProjectPage />;
  }

  if (slug === "home-furniture") {
    return <HomeFurnitureProjectPage />;
  }

  if (slug === "landscape") {
    return <LandscapeProjectPage />;
  }

  if (slug === "coffee-shop") {
    return <CoffeeShopProjectPage />;
  }

  return (
    <div className="min-h-full bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200/80">
          Project
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-3 text-sm text-slate-200/80">{project.description}</p>
        <p className="mt-4 text-sm text-slate-300/80">
          This is a placeholder detail view. In the future, you can expand this page
          with real screenshots, metrics, process notes, and links to live demos or
          case studies for this project.
        </p>
        <Link href="/projects" className="mt-6 inline-block text-sm text-sky-200 hover:text-sky-100">
          ← Back to projects
        </Link>
      </div>
    </div>
  );
}
