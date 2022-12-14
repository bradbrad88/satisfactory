export interface Building {
  id: string;
  name: string;
  description: string;
  power: number;
  powerExponent: number;
  category: "PRODUCTION" | "EXTRACTOR" | "GENERATOR";
}

export default [
  {
    id: "Build_ConstructorMk1_C",
    name: "Constructor",
    power: 4,
    powerExponent: 1.6,
    description:
      "Crafts one part into another part.\r\n\r\nCan be automated by feeding parts into it with a conveyor belt connected to the input. The produced parts can be automatically extracted by connecting a conveyor belt to the output.",
    category: "PRODUCTION",
  },
  {
    id: "Build_SmelterMk1_C",
    name: "Smelter",
    power: 4,
    powerExponent: 1.6,
    description:
      "Smelts ore into ingots.\r\n\r\nCan be automated by feeding ore into it with a conveyor belt connected to the input. The produced ingots can be automatically extracted by connecting a conveyor belt to the output.",
    category: "PRODUCTION",
  },
  {
    id: "Build_FoundryMk1_C",
    name: "Foundry",
    power: 16,
    powerExponent: 1.6,
    description:
      "Smelts two resources into alloy ingots.\r\n\r\nCan be automated by feeding ore into it with a conveyor belt connected to the inputs. The produced ingots can be automatically extracted by connecting a conveyor belt to the output.",
    category: "PRODUCTION",
  },
  {
    id: "Build_OilRefinery_C",
    name: "Refinery",
    power: 30,
    powerExponent: 1.6,
    description:
      "Refines fluid and/or solid parts into other parts.\r\nHead Lift: 10 meters.\r\n(Allows fluids to be transported 10 meters upwards.)\r\n\r\nContains both a Conveyor Belt and Pipe input and output, to allow for the automation of various recipes.",
    category: "PRODUCTION",
  },
  {
    id: "Build_AssemblerMk1_C",
    name: "Assembler",
    power: 15,
    powerExponent: 1.6,
    description:
      "Crafts two parts into another part.\r\n\r\nCan be automated by feeding parts into it with a conveyor belt connected to the input. The produced parts can be automatically extracted by connecting a conveyor belt to the output.",
    category: "PRODUCTION",
  },
  {
    id: "Build_Packager_C",
    name: "Packager",
    power: 10,
    powerExponent: 1.6,
    description:
      "Used for the packaging and unpacking of fluids.\r\nHead Lift: 10 meters.\r\n(Allows fluids to be transported 10 meters upwards.)\r\n\r\nContains both a Conveyor Belt and Pipe input and output, to allow for the automation of various recipes.",
    category: "PRODUCTION",
  },
  {
    id: "Build_Blender_C",
    name: "Blender",
    power: 75,
    powerExponent: 1.6,
    description:
      "The Blender is capable of blending fluids and combining them with solid parts in various processes.\r\nHead Lift: 10 meters.\r\n(Allows fluids to be transported 10 meters upwards).\r\n\r\nContains both Conveyor Belt and Pipe inputs and outputs.",
    category: "PRODUCTION",
  },
  {
    id: "Build_ManufacturerMk1_C",
    name: "Manufacturer",
    power: 55,
    powerExponent: 1.6,
    description:
      "Crafts three or four parts into another part.\r\n\r\nCan be automated by feeding parts into it with a conveyor belt connected to the input. The produced parts can be automatically extracted by connecting a conveyor belt to the output.",
    category: "PRODUCTION",
  },
  {
    id: "Build_HadronCollider_C",
    name: "Particle Accelerator",
    power: 0,
    powerExponent: 1.6,
    description:
      "The FICSIT Particle Accelerator uses electromagnetic fields to propel particles to very high speeds and energies. The specific design allows for a variety of processes, such as matter generation and conversion.\r\n\r\nWarning: Power usage is extremely high, unstable, and varies per recipe.",
    category: "PRODUCTION",
  },
  {
    id: "Build_GeneratorBiomass_C",
    name: "Biomass Burner",
    power: -30,
    powerExponent: 1.6,
    description:
      "Burns various forms of biomass to generate electricity for the power grid.\r\nHas no input and must therefore be fed biomass manually.\r\n\r\nResource consumption will automatically be lowered to meet power demands.",
    category: "GENERATOR",
  },
  {
    id: "Build_GeneratorCoal_C",
    name: "Coal Generator",
    power: -75,
    powerExponent: 1.6,
    description:
      "Burns Coal to boil Water, the produced steam rotates turbines to generate electricity for the power grid.\r\nHas a Conveyor Belt and Pipe input, so both the Coal and Water supply can be automated.\r\n\r\nCaution: Always generates at the set clock speed. Shuts down if fuel requirements are not met.",
    category: "GENERATOR",
  },
  {
    id: "Build_GeneratorFuel_C",
    name: "Fuel Generator",
    power: -150,
    powerExponent: 1.6,
    description:
      "Consumes Fuel to generate electricity for the power grid.\r\nHas a Pipe input so the Fuel supply can be automated.\r\n\r\nCaution: Always generates at the set clock speed. Shuts down if fuel requirements are not met.",
    category: "GENERATOR",
  },
  {
    id: "Build_GeneratorNuclear_C",
    name: "Nuclear Power Plant",
    power: -2500,
    powerExponent: 1.6,
    description:
      "Consumes Nuclear Fuel Rods and Water to produce electricity for the power grid.\r\n\r\nProduces Nuclear Waste, which is extracted from the conveyor belt output.\r\n\r\nCaution: Always generates at the set clock speed. Shuts down if fuel requirements are not met.",
    category: "GENERATOR",
  },
  {
    id: "Build_MinerMk1_C",
    name: "Miner Mk.1",
    power: 5,
    powerExponent: 1.6,
    description:
      "Extracts solid resources from the resource node it is built on. \r\nThe normal extraction rate is 60 resources per minute. \r\nThe extraction rate is modified depending on resource node purity. Outputs all extracted resources onto connected conveyor belts.",
    category: "EXTRACTOR",
  },
  {
    id: "Build_OilPump_C",
    name: "Oil Extractor",
    power: 40,
    powerExponent: 1.6,
    description:
      "Normal extraction rate: 120m?? oil per minute.\r\nHead Lift: 10 meters.\r\n(Allows fluids to be transported 10 meters upwards.)\r\n\r\nCan be built on an Oil Node to extract Crude Oil. Extraction rates depend on node purity.",
    category: "EXTRACTOR",
  },
  {
    id: "Build_MinerMk2_C",
    name: "Miner Mk.2",
    power: 12,
    powerExponent: 1.6,
    description:
      "Extracts solid resources from the resource node it is built on. \r\nThe normal extraction rate is 120 resources per minute. \r\nThe extraction rate is modified depending on resource node purity. Outputs all extracted resources onto connected conveyor belts.",
    category: "EXTRACTOR",
  },
  {
    id: "Build_MinerMk3_C",
    name: "Miner Mk.3",
    power: 30,
    powerExponent: 1.6,
    description:
      "Extracts solid resources from the resource node it is built on. \r\nThe normal extraction rate is 240 resources per minute. \r\nThe extraction rate is modified depending on resource node purity. Outputs all extracted resources onto connected conveyor belts.",
    category: "EXTRACTOR",
  },
  {
    id: "Build_WaterPump_C",
    name: "Water Extractor",
    power: 20,
    powerExponent: 1.6,
    description:
      "Default extraction rate: 120m?? water per minute.\r\nHead Lift: 10 meters.\r\n(Allows fluids to be transported 10 meters upwards.)\r\n\r\nExtracts water from the body of water it is built on.\r\nNote that the water needs to be deep enough and that rivers do not commonly suffice.",
    category: "EXTRACTOR",
  },
  {
    id: "Build_FrackingExtractor_C",
    name: "Resource Well Extractor",
    power: 0,
    powerExponent: 1.6,
    description:
      "Normal extraction rate: 60m?? fluid per minute.\r\nHead Lift: 10 meters.\r\n(Allows fluids to be transported 10 meters upwards.)\r\n\r\nCan be placed on the activated sub-nodes of a Resource Well to collect the pressurized resources. Does not require Power.",
    category: "EXTRACTOR",
  },
  {
    id: "Build_FrackingSmasher_C",
    name: "Resource Well Pressurizer",
    power: 150,
    powerExponent: 1.6,
    description:
      "Can be placed on a Resource Well to activate it by pressurizing the underground resource.\r\nOnce activated, Resource Well Extractors can be placed on the surrounding sub-nodes to extract the resource.\r\nRequires Power. Overclocking increases the output potential of the entire Resource Well.",
    category: "EXTRACTOR",
  },
] as Building[];
