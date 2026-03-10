// Master project list — 19 projects
// Images are served via jsDelivr CDN from github.com/nishantm77/DHC-Photos
// `folder`  — must match the folder name in that repo exactly (e.g. '3. Rosemeade Recreational')
// `images`  — exact filenames inside that folder (including any freecompress- prefix)
// `featured` — marks the 5 shown on the main Projects page

const CDN_BASE = 'https://cdn.jsdelivr.net/gh/nishantm77/DHC-Photos@v1.0'

// Encode each path segment individually so spaces, commas, etc. are all safe
export function imgUrl(folder, filename) {
  return `${CDN_BASE}/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`
}

export const projects = [
  {
    slug: 'carrollton-perry-homestead-museum',
    title: 'Carrollton Perry Homestead Museum',
    scope: 'Historic Restoration & Preservation',
    client: 'City of Carrollton',
    type: 'Cultural Heritage',
    folder: '1. Carrollton Perry Homestead Museum',
    images: [
      'freecompress-DJI_20260116125253_0051_D.webp',
      'freecompress-DJI_20260116130009_0056_D.webp',
    ],
    description:
      'Comprehensive historic restoration of the Perry Homestead Museum, preserving original architectural elements while bringing the facility up to modern safety and accessibility standards.',
    featured: false,
  },
  {
    slug: 'denton-courthouse',
    title: 'Denton Courthouse',
    scope: 'Renovation & Structural Improvements',
    client: 'Denton County',
    type: 'County Government',
    folder: '2. Denton Courthouse',
    images: [
      'freecompress-2 (2).webp',
      'freecompress-DJI_20260121100200_0085_D.webp',
    ],
    description:
      'Renovation and structural improvements to the Denton County Courthouse, enhancing the durability and functionality of this civic landmark.',
    featured: false,
  },
  {
    slug: 'rosemeade-recreational',
    title: 'Rosemeade Recreational Center',
    scope: 'Facility Renovation & Improvements',
    client: 'City of Carrollton',
    type: 'Recreation Facility',
    folder: '3. Rosemeade Recreational',
    images: [
      '1. (2).webp',
      '20260204_122611962_iOS.webp',
      '20260204_122842914_iOS.webp',
    ],
    description:
      'Interior and exterior improvements to the Rosemeade Recreational Center, delivering upgraded amenities for the surrounding community.',
    featured: false,
  },
  {
    slug: 'gsa-earl-campbell-building',
    title: 'GSA Earl Campbell Building',
    scope: 'Federal Building Improvements',
    client: 'U.S. General Services Administration',
    type: 'Federal Government',
    folder: '4. GSA Earl Campbell Building',
    images: [
      '1. (3).webp',
      'Final (2).webp',
      'Final (9).webp',
    ],
    description:
      'Facility improvements at the federally managed Earl Campbell Building, executed to strict GSA specifications and quality standards.',
    featured: false,
  },
  {
    slug: 'mlk-library',
    title: 'MLK Library',
    scope: 'Interior Improvements & Renovation',
    client: 'City of Dallas',
    type: 'Public Institution',
    folder: '5. MLK Library',
    images: [
      'After (14).webp',
      'After (17).webp',
      'After (4).webp',
      'After (7).webp',
    ],
    description:
      'Full interior renovation of the Martin Luther King Jr. Library branch, modernizing the space to better serve the City of Dallas community.',
    featured: true,
  },
  {
    slug: 'fireside-recreation-centre',
    title: 'Fireside Recreation Centre',
    scope: 'Interior Renovation',
    client: 'City of Dallas',
    type: 'Recreation Facility',
    folder: '6. Fireside Recreation Centre',
    images: [
      '1. (4).webp',
      'After (1).webp',
      'After (2).webp',
    ],
    description:
      'Complete interior renovation of the Fireside Recreation Centre, transforming the facility with updated finishes, improved layouts, and enhanced programming spaces.',
    featured: true,
  },
  {
    slug: 'keeton-park-golf-course',
    title: 'Keeton Park Golf Course',
    scope: 'Exterior Renovation & Site Work',
    client: 'City of Fort Worth',
    type: 'Municipal Government',
    folder: '7. Keeton Park Golf Course',
    images: [
      '1. (5).webp',
      '1. Final (1).webp',
      '1. Final (3).webp',
      '1. Final (4).webp',
    ],
    description:
      'Exterior renovation and site-work improvements at Keeton Park Golf Course, enhancing the grounds and infrastructure for players and visitors alike.',
    featured: false,
  },
  {
    slug: 'new-metal-awning',
    title: 'New Metal Awning',
    scope: 'Metal Awning Design & Installation',
    client: 'Commercial Client',
    type: 'Commercial',
    folder: '8. New Metal Awning',
    images: [
      'After (11).webp',
      'After (6).webp',
      'IMG_2575.webp',
      'KIMI4599.webp',
    ],
    description:
      'Custom metal awning fabrication and installation, combining structural integrity with architectural detail to deliver a durable, striking façade feature.',
    featured: false,
  },
  {
    slug: 'carrollton-gazebo-repair',
    title: 'Carrollton Gazebo Repair',
    scope: 'Historic Preservation & Structural Repair',
    client: 'City of Carrollton',
    type: 'Cultural Heritage',
    folder: '9. Carrollton Gazebo Repair',
    images: [
      '1. (6).webp',
      'IMG_7339.webp',
    ],
    description:
      'Structural repair and historic preservation of the Carrollton Gazebo, restoring a beloved community landmark to its original integrity.',
    featured: true,
  },
  {
    slug: 'arlington-city-hall-screen-wall',
    title: 'Arlington City Hall Screen Wall',
    scope: 'Structural Concrete & Screen Wall Installation',
    client: 'City of Arlington',
    type: 'Municipal Government',
    folder: '10. Arlington City Hall Screen Wall',
    images: [
      '1. (7).webp',
      'After (2) (1).webp',
      'Construction (21).webp',
    ],
    description:
      'Design and installation of a structural concrete screen wall at Arlington City Hall — a highly visible civic project demanding precision craftsmanship and rigorous quality control.',
    featured: true,
  },
  {
    slug: 'dallas-county-courthouse',
    title: 'Dallas County Court House',
    scope: 'Site Improvements & Driveway Widening',
    client: 'Dallas County',
    type: 'County Government',
    folder: '11. Dallas County Court House',
    images: [
      '1. (8).webp',
    ],
    description:
      'Site improvement work at the Dallas County Courthouse, including driveway widening and exterior upgrades that enhance access and appearance for this prominent civic building.',
    featured: true,
  },
  {
    slug: 'cca-3rd-floor-renovation',
    title: 'CCA 3rd Floor Renovation',
    scope: 'Full Floor Renovation',
    client: 'Child Care Associates',
    type: 'Nonprofit Education',
    folder: '12. CCA 3rd Floor Renovation',
    images: [
      '1. (9).webp',
      'Picture1.webp',
    ],
    description:
      'Complete third-floor renovation for Child Care Associates, delivering a refreshed, functional environment in support of their nonprofit educational mission.',
    featured: false,
  },
  {
    slug: 'carrollton-golf-course',
    title: 'Carrollton Golf Course',
    scope: 'Golf Course Facility Improvements',
    client: 'City of Carrollton',
    type: 'Municipal Government',
    folder: '13. Carrollton Golf Course',
    images: [
      'freecompress-1. (10) (1).webp',
    ],
    description:
      'Facility and infrastructure improvements at the Carrollton Golf Course, enhancing the player experience and long-term durability of the grounds.',
    featured: false,
  },
  {
    slug: 'tccd',
    title: 'TCCD Campus Improvements',
    scope: 'Campus Facilities & Infrastructure',
    client: 'Tarrant County College District',
    type: 'Education',
    folder: '14. TCCD Camous Improvements',
    images: [
      'freecompress-1. (11).webp',
    ],
    description:
      'Campus improvements for the Tarrant County College District — expanding and upgrading infrastructure to support a growing student and faculty population.',
    featured: false,
  },
  {
    slug: '1033-s-westpark',
    title: '1033 S Westpark',
    scope: 'Commercial Renovation',
    client: 'Private Client',
    type: 'Commercial',
    folder: '15. 1033 S Westpark',
    images: [
      'freecompress-1. (12).webp',
      'freecompress-DJI_20260123110603_0114_D.webp',
      'freecompress-DJI_20260123111611_0121_D.webp',
      'freecompress-DJI_20260203092110_0146_D.webp',
    ],
    description:
      'Full commercial renovation of 1033 S Westpark, transforming the space with modern finishes, updated systems, and improved layout to meet the client\'s operational needs.',
    featured: false,
  },
  {
    slug: 'majestic-theater-renovation',
    title: 'Renovation at Majestic Theater',
    scope: 'Historic Theater Renovation',
    client: 'City of Dallas',
    type: 'Cultural Heritage',
    folder: '16. Renovation at Majestic Theater',
    images: [
      '1. (13).webp',
      '2.webp',
      '4.webp',
      '5.webp',
    ],
    description:
      'Renovation work at Dallas\'s iconic Majestic Theater — a landmark project requiring meticulous craftsmanship to restore and enhance one of the city\'s most treasured performance venues.',
    featured: false,
  },
  {
    slug: 'denton-stucco',
    title: 'Denton Stucco',
    scope: 'Stucco & Exterior Finish Work',
    client: 'Private Client',
    type: 'Commercial',
    folder: '17. Denton Stucco',
    images: [
      'freecompress-1. (14).webp',
      '2025-12-18 09.49.37_127, North Woodrow Lane.webp',
      '2025-12-18 09.50.29_127, North Woodrow Lane.webp',
    ],
    description:
      'High-quality stucco application and exterior finish work in Denton, demonstrating DHC\'s self-performed trade capability and attention to surface quality.',
    featured: false,
  },
  {
    slug: 'highland-village-basketball-courts',
    title: 'Highland Village Basketball Courts',
    scope: 'Sports Facility Construction',
    client: 'City of Highland Village',
    type: 'Recreation Facility',
    folder: '18. Highland Village Basketball Courts',
    images: [
      'freecompress-1. (15).webp',
      'freecompress-DJI_20260113100311_0050_D.webp',
    ],
    description:
      'Construction of new basketball courts for the City of Highland Village, delivering safe, durable, professional-grade facilities for community athletes.',
    featured: false,
  },
  {
    slug: 'arlington-utilities',
    title: 'Arlington Utilities',
    scope: 'Utilities Infrastructure Work',
    client: 'City of Arlington',
    type: 'Municipal Government',
    folder: '19. Arlington Utilities',
    images: [
      '1. Can you take a better snip.webp',
    ],
    description:
      'Utilities infrastructure upgrades for the City of Arlington, ensuring reliable service delivery and long-term durability for essential city systems.',
    featured: false,
  },
]

export const featuredProjects = projects.filter(p => p.featured)
export const getProjectBySlug = slug => projects.find(p => p.slug === slug)
