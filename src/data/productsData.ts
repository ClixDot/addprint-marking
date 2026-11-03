export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface DetailedProduct {
  id: number;
  slug: string;
  name: string;
  category: string;
  badge?: string;
  isNew?: boolean;
  buttonText: string;
  image: string;
  galleryImages?: string[];
  tagline: string;
  shortDescription: string;
  fullDescription: string[];
  specs: ProductSpec[];
  features: ProductFeature[];
  materials: string[];
  industries: string[];
  includedOptions: string[];
}

export const PRODUCTS_DATA: DetailedProduct[] = [
  {
    id: 1,
    slug: "speedy-series",
    name: "Speedy series",
    category: "Laser Machines",
    badge: "Flagship Laser System",
    buttonText: "Speedy",
    image: "/images/product 1.webp",
    galleryImages: [
      "/images/speedy_workshop_studio.png",
      "/images/hero_speedy_flexx_lineup.png",
      "/images/speedy_100.png"
    ],
    tagline: "The fastest, most versatile flatbed laser engraver and cutter in the world.",
    shortDescription: "High-performance laser engraver and cutter.",
    fullDescription: [
      "The Speedy series flatbed laser engraving and cutting systems are engineered for maximum productivity, exceptional detail precision, and minimal operational downtime.",
      "Powered by patented Flexx Technology® (integrating both CO₂ and fiber laser sources in a single platform), the Speedy series handles woods, acrylics, glass, textiles, and bare industrial metals without manual laser tube swapping.",
      "Operated via Run on Ruby® 3.0, the world's most intuitive laser software with seamless file imports, cloud connectivity, and integrated vision camera job alignment."
    ],
    specs: [
      { label: "Working Area", value: "Up to 1016 × 610 mm (40 × 24 in) on Speedy 400" },
      { label: "Laser Power (CO₂)", value: "30 to 120 Watts Ceramicore®" },
      { label: "Laser Power (Fiber)", value: "20 to 50 Watts MOPA / Fiber" },
      { label: "Maximum Processing Speed", value: "4.3 m/s (170 in/s)" },
      { label: "Maximum Acceleration", value: "5g acceleration with OptiMotion™" },
      { label: "Max Workpiece Height", value: "Up to 305 mm with pass-through capability" },
      { label: "Software Platform", value: "Run on Ruby® 3.0 (Web, Local & Cloud)" },
      { label: "Enclosure Standard", value: "CDRH Laser Safety Class 2 (Enclosed)" }
    ],
    features: [
      {
        title: "Patented Flexx Technology®",
        description: "Combines CO₂ (for organics & plastics) and Fiber (for metals & contrast markings) in one machine."
      },
      {
        title: "OptiMotion™ Motion Control",
        description: "Automatically optimizes path trajectories, allowing up to 8x faster cutting on intricate curves."
      },
      {
        title: "InPack Technology™ Dust Protection",
        description: "Seals all sensitive optical and mechanical components against harsh dust and smoke for lifetime reliability."
      },
      {
        title: "SonarFocus™ Ultrasonic Auto-Focus",
        description: "Fast, digital multi-point autofocusing accurate to fractions of a millimeter."
      }
    ],
    materials: [
      "Wood & MDF", "Acrylic / PMMA", "Anodized Aluminum", "Stainless Steel", "Plastics & ABS",
      "Leather & Fabric", "Glass & Crystal", "Paper & Cardboard", "Rubber Stamps", "Stone & Granite"
    ],
    industries: [
      "Signage & Acrylic Displays", "Awards, Trophies & Gifts", "Architectural Model Making",
      "Textiles & Fashion", "Industrial Part Identification", "Personalized Merchandise"
    ],
    includedOptions: [
      "Multifunctional table concept (Cutting grid, Vacuum table, Honeycomb)",
      "Atmos Duo Plus laser exhaust and filtration system",
      "Rotary engraving attachment for cylindrical glassware & bottles",
      "Ruby® Vision camera system for automated print-to-cut registration"
    ]
  },
  {
    id: 2,
    slug: "e-line",
    name: "E Line",
    category: "Laser Machines",
    badge: "Next-Gen Essentials",
    buttonText: "Discover E Line",
    image: "/images/product 2.webp",
    galleryImages: [
      "/images/e340_co2_laser_cutter.png",
      "/images/e340_honeycomb_bed.png",
      "/images/e340_laser_head.png",
      "/images/e340_rotary_attachment.png"
    ],
    tagline: "All a Laser Cutter Needs. Focused on the essentials. Ready to grow with you.",
    shortDescription: "All a Laser Cutter Needs. Focused on the essentials. Ready to grow with you.",
    fullDescription: [
      "The E Line introduces modern Austrian laser cutting engineering in an accessible, ultra-reliable format designed for growing makerspaces, fabrication workshops, and small production facilities.",
      "Streamlined for effortless operation, clean cut edges on plastics and wood, and lowest power consumption, E Line delivers rapid return on investment with uncompromising build quality."
    ],
    specs: [
      { label: "Working Format", value: "Medium to large format flatbed cutting table" },
      { label: "Laser Technology", value: "High-efficiency CO₂ sealed laser tube" },
      { label: "Laser Power", value: "60W / 80W / 100W" },
      { label: "Cutting Speed", value: "Up to 1.5 m/s with constant beam delivery" },
      { label: "Focus Mechanism", value: "Precision tactile auto-focus sensor" },
      { label: "Connectivity", value: "USB 3.0 & High-speed Ethernet" },
      { label: "Exhaust System", value: "Integrated table exhaust with safety cut-off" }
    ],
    features: [
      {
        title: "Essential Focus Engineering",
        description: "Optimized for the core tasks of laser cutting and engraving without unnecessary overhead."
      },
      {
        title: "Clean Edge Laser Beam Delivery",
        description: "Uniform spot size across the entire cutting bed for razor-sharp acrylic edge polishing."
      },
      {
        title: "Plug & Produce Setup",
        description: "Quick installation, pre-calibrated material parameter presets, and immediate production readiness."
      }
    ],
    materials: [
      "Cast & Extruded Acrylic", "Solid Wood & Plywood", "Paper, Cardboard & Corrugated",
      "Foam & Packaging materials", "Textiles & Felt", "Laserable Plastic Sheets"
    ],
    industries: [
      "Educational Labs & Universities", "Packaging & Prototype Studios",
      "Makerspaces & Custom Crafts", "Sign & Display Shops"
    ],
    includedOptions: [
      "Honeycomb cutting bed",
      "Air assist compressor with active pressure regulator",
      "Laser exhaust air extraction system",
      "Comprehensive starter toolkit & lens cleaning accessories"
    ]
  },
  {
    id: 3,
    slug: "speedmarker-series",
    name: "SpeedMarker series",
    category: "Industrial Marking",
    badge: "Automated Galvo Workstation",
    buttonText: "SpeedMarker",
    image: "/images/product 3.webp",
    galleryImages: [
      "/images/speedmarker_galvo_action.png",
      "/images/hero_speedmarker_fleet.png",
      "/images/speedmarker_series_facility.png"
    ],
    tagline: "High-speed automated industrial marking systems for high-volume batches & inline production.",
    shortDescription: "Automated laser marking machines for marking individual components as well as large batches.",
    fullDescription: [
      "The SpeedMarker series workstations provide high-speed, high-contrast, permanent laser marking for industrial manufacturing, medical devices, automotive components, and electronics.",
      "Equipped with advanced MOPA fiber lasers and high-precision galvo scanning heads, SpeedMarker marks alphanumeric codes, Datamatrix barcodes, QR codes, deep engravings, and vibrant color markings on stainless steel and titanium.",
      "Customizable with automated rotary indexing tables, conveyor pass-throughs, and full integration into ERP/MES manufacturing networks."
    ],
    specs: [
      { label: "Marking Field Options", value: "70×70 mm up to 310×310 mm galvo lenses" },
      { label: "Laser Source Options", value: "Fiber (20W–50W), MOPA (20W–100W), UV (3W–5W), Green" },
      { label: "Marking Speed", value: "Up to 12,000 mm/sec (galvo scanner)" },
      { label: "Pulse Frequency / Duration", value: "Variable pulse durations from 2 ns to 500 ns (MOPA)" },
      { label: "Workstation Housing", value: "Class 1 laser safety cabin with automated pneumatic doors" },
      { label: "Automation Interfaces", value: "Digital I/O, Profinet, Profibus, TCP/IP, OPC UA" }
    ],
    features: [
      {
        title: "MOPA Adjustable Pulse Technology",
        description: "Full control over pulse width enables black annealing marking on stainless steel without corrosion, and color annealing on titanium."
      },
      {
        title: "SpeedMark® Automation Software",
        description: "Graphical programming interface with script editor, ERP database link, and automated sequential serial numbering."
      },
      {
        title: "Rotary & Multi-Axis Motion",
        description: "Supports rotational indexing axes, motorized Z-axis, and segmented marking of oversized trays."
      }
    ],
    materials: [
      "Stainless Steel & Tool Steel", "Titanium & Surgical Alloys", "Anodized & Raw Aluminum",
      "Brass, Copper & Precious Metals", "Engineering Polymers (PA, PBT, POM, ABS)", "Silicon & Ceramics"
    ],
    industries: [
      "Automotive & Aerospace Tier 1", "Medical Technology & Surgical Instruments",
      "Electronics & Semiconductor", "Tool & Die Manufacturing", "Industrial Defense"
    ],
    includedOptions: [
      "Automated rotary index table for parallel loading and marking",
      "Integrated 2D barcode verification camera with grading",
      "Atmos Compact industrial fume extraction",
      "Motorized X-Y-Z axis expansion"
    ]
  },
  {
    id: 4,
    slug: "laser-software",
    name: "Laser software (Ruby®)",
    category: "Software & Materials",
    badge: "Intelligent Cloud & Local",
    buttonText: "Discover laser",
    image: "/images/product 4.webp",
    galleryImages: [
      "/images/ruby_laser_software_operator_hd.jpg",
      "/images/ruby_laser_software_operator.png"
    ],
    tagline: "Connected work, intuitive user interface, and seamless workflow from design to final cut.",
    shortDescription: "Connected work, intuitive user interface, seamless workflow with laser software Ruby®.",
    fullDescription: [
      "Ruby® reimagines how laser users create, edit, manage, and produce laser jobs. It bridges the gap between graphic design software and machine execution in a single web-based environment.",
      "Manage multiple laser machines across local networks, distribute jobs from anywhere in the company, utilize smart material parameter libraries, and eliminate tedious manual prep work."
    ],
    specs: [
      { label: "Architecture", value: "Modern Web, Local Server & Cloud Connected" },
      { label: "File Format Support", value: "Direct import: SVG, DXF, PDF, AI, PNG, JPG, BMP" },
      { label: "Supported Platforms", value: "Windows 10/11, macOS, iPadOS, Linux browsers" },
      { label: "Multi-Machine Control", value: "Centralized queue managing multiple lasers simultaneously" },
      { label: "Vision Camera Support", value: "Live bed camera view with drag-and-drop graphic placement" }
    ],
    features: [
      {
        title: "Direct Graphic Prep in Software",
        description: "Edit vectors, adjust text, create cut outlines, and arrange arrays directly without switching external graphics tools."
      },
      {
        title: "Run on Ruby® Cloud Workspace",
        description: "Store validated material settings, project templates, and user permissions accessible across your entire enterprise."
      },
      {
        title: "Smart Vision Job Placement",
        description: "Live camera overlay lets you place designs visually over printed graphics or irregular scrap materials with millimeter precision."
      }
    ],
    materials: [
      "All laser materials and parameter profiles pre-calibrated in the official Trotec material cloud database"
    ],
    industries: [
      "All commercial, educational, and industrial laser workshops"
    ],
    includedOptions: [
      "Ruby® standard license included with every new Trotec machine",
      "Ruby® Remote API module for integration with e-commerce webshops",
      "Multi-user permission management module"
    ]
  },
  {
    id: 5,
    slug: "laser-materials",
    name: "Laser materials",
    category: "Software & Materials",
    badge: "Certified Quality",
    buttonText: "Discover laser",
    image: "/images/product 5.webp",
    galleryImages: [
      "/images/laserwood_cutting_bed.png",
      "/images/trotec_laser_materials_warehouse.png"
    ],
    tagline: "Materials engineered specifically for optimal laser processing and premium finishes.",
    shortDescription: "Materials perfectly suited for processing with the laser. For high-quality results.",
    fullDescription: [
      "Using the right material is just as vital as using the right laser machine. We supply authentic, certified laser materials including TroLase acrylic laminates, TroGlass cast acrylic sheets, LaserWood, and anodized aluminum plates.",
      "Engineered for minimal smoke, clean edge vaporisation, and durable UV/weather resistance for interior and exterior architectural signage."
    ],
    specs: [
      { label: "Sheet Formats", value: "Full sheets (1220 × 610 mm), quarter sheets, custom cuts" },
      { label: "Material Thicknesses", value: "0.2 mm foil up to 20 mm solid cast acrylic" },
      { label: "Laminate Types", value: "Micro-surfaced multi-layer acrylics for engraving" },
      { label: "Certifications", value: "RoHS compliant, Halogen-free, UV resistant grade" },
      { label: "Finishes Available", value: "Gloss, Matte, Brushed metallic, Woodgrain, Textured" }
    ],
    features: [
      {
        title: "TroLase Dual-Layer Laminates",
        description: "Fast engraving with zero residue, revealing high-contrast base colors in black, white, gold, and silver."
      },
      {
        title: "TroGlass Cast Acrylic",
        description: "Optical grade cast acrylic that melts during laser cutting to produce crystal-clear polished edges."
      },
      {
        title: "Sustainable LaserWood",
        description: "FSC-certified natural solid woods and multi-ply sheets with minimal glue content for smooth burn-free edges."
      }
    ],
    materials: [
      "TroLase (Standard, Metallic, Foil, Reverse)", "TroGlass (Clear, Color, Frosted, Mirror, Pastel)",
      "LaserWood (Birch, Walnut, Cherry, Oak, Bamboo)", "Anodized Aluminum Badges", "Laser Leatherette"
    ],
    industries: [
      "Architectural Signage & Wayfinding", "Name Badges & ID Plates", "Hotel & Retail Fixtures",
      "Custom Awards & Gifts", "Industrial Control Panel Labels"
    ],
    includedOptions: [
      "Pre-applied 3M high-performance adhesive backing",
      "Custom sheet pre-cutting service",
      "Complete material swatch sample box"
    ]
  },
  {
    id: 6,
    slug: "laser-engraver",
    name: "Laser engraver",
    category: "Laser Machines",
    badge: "Precision Master",
    buttonText: "Discover laser",
    image: "/images/product 6.webp",
    galleryImages: [
      "/images/e340_co2_laser_cutter.png",
      "/images/trotec_laser_engraving_action.png",
      "/images/e340_laser_head.png"
    ],
    tagline: "Unmatched speed and ultra-high resolution engraving across countless substrates.",
    shortDescription: "Ideal lasers for engraving and cutting an endless number of materials such as wood, acrylic and plastic.",
    fullDescription: [
      "Our flatbed laser engraving solutions are built with high-torque brushless motors and precision optics that achieve photorealistic grayscale photo engraving and crisp micro-typography down to 1-point font size.",
      "From high-volume personalized awards to industrial serial plate marking, these systems guarantee consistent depth and sharp contrast."
    ],
    specs: [
      { label: "Resolution Capability", value: "Up to 1000 dpi true optical resolution" },
      { label: "Raster Engraving Speed", value: "Up to 4.3 m/s with 5g acceleration" },
      { label: "Available Laser Tubes", value: "Ceramicore® all-ceramic CO₂ resonators (lifetime gas integrity)" },
      { label: "Safety Standards", value: "Class 2 safety interlocks with laser safety glass viewing window" }
    ],
    features: [
      {
        title: "Photorealistic Grayscale Mode",
        description: "Dynamic pulse modulation creates smooth gradients and rich photographic contrast on wood, stone, and leather."
      },
      {
        title: "Ceramicore® Resonator",
        description: "100% ceramic laser cavity ensures perfectly round beam profile and ultra-fast pulsing frequencies."
      }
    ],
    materials: [
      "Wood & Veneers", "Glass & Mirrors", "Stone, Slate & Marble", "Leather & Suede",
      "Coated Metals & Brass", "Rubber Stamp Matrix", "Paper & Cardboard"
    ],
    industries: [
      "Personalized Gifts & Luxury Goods", "Trophy & Recognition Industry",
      "Stamp Makers & Stationery", "Fablabs & Prototyping"
    ],
    includedOptions: [
      "Rotary cone attachment for wine glasses and tumblers",
      "Fine detail 1.5 inch precision optics lens",
      "Integrated table vacuum assist"
    ]
  },
  {
    id: 7,
    slug: "laser-cutter",
    name: "Laser cutter",
    category: "Laser Machines",
    badge: "Heavy-Duty Production",
    buttonText: "Discover laser cutter",
    image: "/images/product 7.webp",
    galleryImages: [
      "/images/e340_honeycomb_bed.png",
      "/images/trotec_laser_cutting_acrylic.png",
      "/images/e340_slat_table.png"
    ],
    tagline: "High-yield large format laser cutting for acrylics, wood, textiles, and technical films.",
    shortDescription: "Easy-to-use laser cutters for cutting acrylic, wood, textiles. From small to large format applications.",
    fullDescription: [
      "Designed for signmakers, display builders, and digital fabricators, our Q Series laser cutting machines offer large working tables up to 1300 × 900 mm with dual-source laser power.",
      "Cut acrylic up to 25 mm thick with flame-polished edges in a single pass, without tool wear, clamping requirements, or post-processing."
    ],
    specs: [
      { label: "Cutting Table Dimensions", value: "1300 × 900 mm (51 × 35 in) / 1030 × 630 mm" },
      { label: "CO₂ Laser Power", value: "60W up to 200W DC / RF hybrid" },
      { label: "Max Acrylic Thickness", value: "Up to 25 mm (1 inch) cast PMMA" },
      { label: "Exhaust Routing", value: "Sectioned table exhaust with vacuum segmentation" },
      { label: "Optical System", value: "Long-focus 2.5\" & 4.0\" cutting lenses with air-knife protection" }
    ],
    features: [
      {
        title: "Flame-Polished Cut Edges",
        description: "Laser cut acrylic requires zero polishing, buffing, or secondary finishing steps."
      },
      {
        title: "Sectional Vacuum Exhaust Table",
        description: "Draws exhaust gases and smoke directly beneath the cut line, preventing back-flash and smoke staining."
      },
      {
        title: "Optical Print-to-Cut Registration",
        description: "High-resolution CCD registration camera automatically compensates for print distortion and skew."
      }
    ],
    materials: [
      "Cast Acrylic & Plexiglas®", "MDF, Hardwood & Plywood", "Technical Textiles, Aramid & Cordura",
      "Architectural Model Board", "PET, Polycarbonate & Films", "Corrugated Cardboard"
    ],
    industries: [
      "Signage, Display & Retail POS", "Textile & Technical Fabric Cutting",
      "Model Making & Architectural Studios", "Furniture & Decorative Panels"
    ],
    includedOptions: [
      "Aluminum slat cutting table & Honeycomb insert",
      "High-pressure compressed air assist kit",
      "CCD Print Registration Camera System",
      "Industrial high-volume exhaust blower and filter"
    ]
  },
  {
    id: 8,
    slug: "laser-marker",
    name: "Laser marker",
    category: "Industrial Marking",
    badge: "Direct Part Marking",
    buttonText: "Discover laser marker",
    image: "/images/product 8.webp",
    galleryImages: [
      "/images/speedmarker_galvo_action.png",
      "/images/trotec_laser_marker_head.png",
      "/images/solutions_inmarker_head.png"
    ],
    tagline: "Fiber and MOPA laser markers for direct part marking (DPM) on metal and technical plastics.",
    shortDescription: "Fiber lasers for permanent marking on metal and plastic. As stand-alone workstations or integrable laser markers.",
    fullDescription: [
      "Direct part marking (DPM) is essential for full traceability and compliance with ISO/UID/UDI standards. Our fiber laser markers provide indestructible, high-contrast marks on any metal or plastic part.",
      "Available as standalone desktop workstations, enclosed production cabins, or bare galvo marking heads ready for integration into robotic automation lines."
    ],
    specs: [
      { label: "Laser Technology", value: "Ytterbium Fiber Laser / MOPA Pulsed (1064 nm)" },
      { label: "Laser Power Options", value: "20W, 30W, 50W, 70W, 100W" },
      { label: "Galvo Scanner Speed", value: "Up to 800 characters per second" },
      { label: "Marking Types", value: "Annealing, Engraving, Ablation, Color marking, Foaming" },
      { label: "Laser Lifetime", value: "> 100,000 operational hours (zero maintenance)" }
    ],
    features: [
      {
        title: "Corrosion-Free Annealing",
        description: "Creates rich dark markings below the metal surface without damaging the passive protective oxide layer."
      },
      {
        title: "High-Contrast Plastic Color Change",
        description: "Foams or bleaches dark/light contrast on engineering plastics without burning."
      },
      {
        title: "24/7 Industrial Reliability",
        description: "Solid-state fiber laser engine requires zero water cooling or consumable lamp replacements."
      }
    ],
    materials: [
      "Stainless Steel, Carbon Steel, Tool Steel", "Aluminum (Raw, Cast, Anodized)",
      "Titanium & Nickel Superalloys", "Brass & Copper", "Polymers: ABS, PA, PC, POM, PEEK"
    ],
    industries: [
      "Medical Device Manufacturing (UDI)", "Automotive Parts Traceability",
      "Aerospace & Defense Components", "Oil & Gas Tool Marking", "Electronic Components"
    ],
    includedOptions: [
      "Galvo rotary D-axis for 360° cylindrical marking",
      "Focus finder dual-diode laser pointer",
      "Camera-assisted marking positioning",
      "Foot switch trigger & automation bracket"
    ]
  },
  {
    id: 9,
    slug: "laser-solutions",
    name: "Laser solutions",
    category: "Industrial Marking",
    badge: "Custom Engineering",
    buttonText: "More info",
    image: "/images/product 9.webp",
    galleryImages: [
      "/images/trotec_laser_solutions_robotic.png",
      "/images/solutions_vin_marker.png",
      "/images/solutions_customized_modular.png"
    ],
    tagline: "Turnkey laser integration, automated robotic cells, and bespoke industrial marking solutions.",
    shortDescription: "Integration lasers and customized laser marking solutions",
    fullDescription: [
      "When standard off-the-shelf machines do not meet your continuous high-volume assembly line requirements, ADDPRINT and Trotec design custom turnkey laser cells.",
      "We integrate industrial marking heads into conveyor systems, robotic pick-and-place stations, roll-to-roll continuous processing lines, and custom multi-axis manufacturing cells."
    ],
    specs: [
      { label: "Integration Formats", value: "OEM Marking Heads, Conveyor Inline Cells, Robotic Cells" },
      { label: "Communication Protocols", value: "Profinet, Ethernet/IP, Modbus TCP, Digital I/O, REST API" },
      { label: "Safety Compliance", value: "Turnkey Class 1 enclosure compliance with CE certification" },
      { label: "Cycle Times", value: "Sub-second marking for continuous 24/7 high-speed lines" },
      { label: "Custom Workholding", value: "Pneumatic clamping, automated cassette loaders, conveyor stops" }
    ],
    features: [
      {
        title: "Seamless Line Integration",
        description: "Direct handshake with PLC controllers, barcode scanners, and MES factory execution systems."
      },
      {
        title: "Turnkey Engineering Support",
        description: "From concept CAD design, ray-tracing safety analysis, to on-site commissioning in UAE & GCC."
      },
      {
        title: "Automated Inspection & Verification",
        description: "Vision systems verify code legibility and grading (ISO/IEC 15415) immediately after marking."
      }
    ],
    materials: [
      "All industrial metals, alloys, specialized polymers, ceramics, and continuous roll materials"
    ],
    industries: [
      "High-Volume Manufacturing & Assembly", "Automotive Powertrain & EV Battery Lines",
      "Consumer Electronics Packaging", "Pharmaceutical & Medical Packaging", "Heavy Industrial Fabrication"
    ],
    includedOptions: [
      "Custom PLC programming & automation cabinet",
      "Robotic arm gripper and laser interface",
      "High-throughput inline exhaust filtration",
      "Comprehensive on-site operator and engineering training"
    ]
  }
];

export function getProductBySlug(slug: string): DetailedProduct | undefined {
  return PRODUCTS_DATA.find(p => p.slug === slug || p.id.toString() === slug);
}

export function getProductById(id: number): DetailedProduct | undefined {
  return PRODUCTS_DATA.find(p => p.id === id);
}
