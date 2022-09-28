export interface Ingredient {
  item: string;
  amount: number;
}

export interface Recipe {
  id: string;
  name: string;
  alternate: boolean;
  building: string;
  ingredients: Ingredient[];
  product: Ingredient[];
}

export default [
  {
    id: "Recipe_Alternate_ClassicBattery_C",
    name: "Alternate: Classic Battery",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_Sulfur_C",
        amount: 45,
      },
      {
        item: "Desc_AluminumPlate_C",
        amount: 52.5,
      },
      {
        item: "Desc_Plastic_C",
        amount: 60,
      },
      {
        item: "Desc_Wire_C",
        amount: 90,
      },
    ],
    product: [
      {
        item: "Desc_Battery_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_Cable_C",
    name: "Cable",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_Wire_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_Cable_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_Wire_C",
    name: "Wire",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_CopperIngot_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_Wire_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_IngotCopper_C",
    name: "Copper Ingot",
    alternate: false,
    building: "Build_SmelterMk1_C",
    ingredients: [
      {
        item: "Desc_OreCopper_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_CopperIngot_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_IronPlateReinforced_C",
    name: "Reinforced Iron Plate",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_IronPlate_C",
        amount: 30,
      },
      {
        item: "Desc_IronScrew_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_IronPlateReinforced_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_Concrete_C",
    name: "Concrete",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_Stone_C",
        amount: 45,
      },
    ],
    product: [
      {
        item: "Desc_Cement_C",
        amount: 15,
      },
    ],
  },
  {
    id: "Recipe_Screw_C",
    name: "Screw",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_IronRod_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_IronScrew_C",
        amount: 40,
      },
    ],
  },
  {
    id: "Recipe_Biomass_Leaves_C",
    name: "Biomass (Leaves)",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_Leaves_C",
        amount: 120,
      },
    ],
    product: [
      {
        item: "Desc_GenericBiomass_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_Biomass_Wood_C",
    name: "Biomass (Wood)",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_Wood_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_GenericBiomass_C",
        amount: 300,
      },
    ],
  },
  {
    id: "Recipe_Fireworks_01_C",
    name: "Sweet Fireworks",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_XmasBranch_C",
        amount: 15,
      },
      {
        item: "Desc_CandyCane_C",
        amount: 7.5,
      },
    ],
    product: [
      {
        item: "Desc_Fireworks_Projectile_01_C",
        amount: 2.5,
      },
    ],
  },
  {
    id: "Recipe_Fireworks_02_C",
    name: "Fancy Fireworks",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_XmasBranch_C",
        amount: 10,
      },
      {
        item: "Desc_XmasBow_C",
        amount: 7.5,
      },
    ],
    product: [
      {
        item: "Desc_Fireworks_Projectile_02_C",
        amount: 2.5,
      },
    ],
  },
  {
    id: "Recipe_Fireworks_03_C",
    name: "Sparkly Fireworks",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_XmasBranch_C",
        amount: 7.5,
      },
      {
        item: "Desc_Snow_C",
        amount: 5,
      },
    ],
    product: [
      {
        item: "Desc_Fireworks_Projectile_03_C",
        amount: 2.5,
      },
    ],
  },
  {
    id: "Recipe_XmasBranch_C",
    name: "FICSMAS Tree Branch",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_Gift_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_XmasBranch_C",
        amount: 10,
      },
    ],
  },
  {
    id: "Recipe_IronPlate_C",
    name: "Iron Plate",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_IronIngot_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_IronPlate_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_IronRod_C",
    name: "Iron Rod",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_IronIngot_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_IronRod_C",
        amount: 15,
      },
    ],
  },
  {
    id: "Recipe_IngotIron_C",
    name: "Iron Ingot",
    alternate: false,
    building: "Build_SmelterMk1_C",
    ingredients: [
      {
        item: "Desc_OreIron_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_IronIngot_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_Alternate_AdheredIronPlate_C",
    name: "Alternate: Adhered Iron Plate",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_IronPlate_C",
        amount: 11.25,
      },
      {
        item: "Desc_Rubber_C",
        amount: 3.75,
      },
    ],
    product: [
      {
        item: "Desc_IronPlateReinforced_C",
        amount: 3.75,
      },
    ],
  },
  {
    id: "Recipe_CircuitBoard_C",
    name: "Circuit Board",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_CopperSheet_C",
        amount: 15,
      },
      {
        item: "Desc_Plastic_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_CircuitBoard_C",
        amount: 7.5,
      },
    ],
  },
  {
    id: "Recipe_LiquidFuel_C",
    name: "Fuel",
    alternate: false,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_LiquidOil_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_LiquidFuel_C",
        amount: 40,
      },
      {
        item: "Desc_PolymerResin_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_PetroleumCoke_C",
    name: "Petroleum Coke",
    alternate: false,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_HeavyOilResidue_C",
        amount: 40,
      },
    ],
    product: [
      {
        item: "Desc_PetroleumCoke_C",
        amount: 120,
      },
    ],
  },
  {
    id: "Recipe_Plastic_C",
    name: "Plastic",
    alternate: false,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_LiquidOil_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_Plastic_C",
        amount: 20,
      },
      {
        item: "Desc_HeavyOilResidue_C",
        amount: 10,
      },
    ],
  },
  {
    id: "Recipe_Rubber_C",
    name: "Rubber",
    alternate: false,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_LiquidOil_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_Rubber_C",
        amount: 20,
      },
      {
        item: "Desc_HeavyOilResidue_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_ResidualFuel_C",
    name: "Residual Fuel",
    alternate: false,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_HeavyOilResidue_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_LiquidFuel_C",
        amount: 40,
      },
    ],
  },
  {
    id: "Recipe_ResidualPlastic_C",
    name: "Residual Plastic",
    alternate: false,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_PolymerResin_C",
        amount: 60,
      },
      {
        item: "Desc_Water_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_Plastic_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_ResidualRubber_C",
    name: "Residual Rubber",
    alternate: false,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_PolymerResin_C",
        amount: 40,
      },
      {
        item: "Desc_Water_C",
        amount: 40,
      },
    ],
    product: [
      {
        item: "Desc_Rubber_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_Alternate_BoltedFrame_C",
    name: "Alternate: Bolted Frame",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_IronPlateReinforced_C",
        amount: 7.5,
      },
      {
        item: "Desc_IronScrew_C",
        amount: 140,
      },
    ],
    product: [
      {
        item: "Desc_ModularFrame_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_ModularFrame_C",
    name: "Modular Frame",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_IronPlateReinforced_C",
        amount: 3,
      },
      {
        item: "Desc_IronRod_C",
        amount: 12,
      },
    ],
    product: [
      {
        item: "Desc_ModularFrame_C",
        amount: 2,
      },
    ],
  },
  {
    id: "Recipe_Rotor_C",
    name: "Rotor",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_IronRod_C",
        amount: 20,
      },
      {
        item: "Desc_IronScrew_C",
        amount: 100,
      },
    ],
    product: [
      {
        item: "Desc_Rotor_C",
        amount: 4,
      },
    ],
  },
  {
    id: "Recipe_CopperSheet_C",
    name: "Copper Sheet",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_CopperIngot_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_CopperSheet_C",
        amount: 10,
      },
    ],
  },
  {
    id: "Recipe_SpaceElevatorPart_1_C",
    name: "Smart Plating",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_IronPlateReinforced_C",
        amount: 2,
      },
      {
        item: "Desc_Rotor_C",
        amount: 2,
      },
    ],
    product: [
      {
        item: "Desc_SpaceElevatorPart_1_C",
        amount: 2,
      },
    ],
  },
  {
    id: "Recipe_Alternate_CoatedCable_C",
    name: "Alternate: Coated Cable",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_Wire_C",
        amount: 37.5,
      },
      {
        item: "Desc_HeavyOilResidue_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_Cable_C",
        amount: 67.5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_CoatedIronCanister_C",
    name: "Alternate: Coated Iron Canister",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_IronPlate_C",
        amount: 30,
      },
      {
        item: "Desc_CopperSheet_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_FluidCanister_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_ColorCartridge_C",
    name: "Color Cartridge",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_FlowerPetals_C",
        amount: 50,
      },
    ],
    product: [
      {
        item: "Desc_ColorCartridge_C",
        amount: 100,
      },
    ],
  },
  {
    id: "Recipe_FluidCanister_C",
    name: "Empty Canister",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_Plastic_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_FluidCanister_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_Fuel_C",
    name: "Packaged Fuel",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_LiquidFuel_C",
        amount: 40,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 40,
      },
    ],
    product: [
      {
        item: "Desc_Fuel_C",
        amount: 40,
      },
    ],
  },
  {
    id: "Recipe_LiquidBiofuel_C",
    name: "Liquid Biofuel",
    alternate: false,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_Biofuel_C",
        amount: 90,
      },
      {
        item: "Desc_Water_C",
        amount: 45,
      },
    ],
    product: [
      {
        item: "Desc_LiquidBiofuel_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_PackagedBiofuel_C",
    name: "Packaged Liquid Biofuel",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_LiquidBiofuel_C",
        amount: 40,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 40,
      },
    ],
    product: [
      {
        item: "Desc_PackagedBiofuel_C",
        amount: 40,
      },
    ],
  },
  {
    id: "Recipe_PackagedCrudeOil_C",
    name: "Packaged Oil",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_LiquidOil_C",
        amount: 30,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_PackagedOil_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_PackagedOilResidue_C",
    name: "Packaged Heavy Oil Residue",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_HeavyOilResidue_C",
        amount: 30,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_PackagedOilResidue_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_PackagedWater_C",
    name: "Packaged Water",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_Water_C",
        amount: 60,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_PackagedWater_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_UnpackageBioFuel_C",
    name: "Unpackage Liquid Biofuel",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_PackagedBiofuel_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_LiquidBiofuel_C",
        amount: 60,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_UnpackageFuel_C",
    name: "Unpackage Fuel",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_Fuel_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_LiquidFuel_C",
        amount: 60,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_UnpackageOil_C",
    name: "Unpackage Oil",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_PackagedOil_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_LiquidOil_C",
        amount: 60,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_UnpackageOilResidue_C",
    name: "Unpackage Heavy Oil Residue",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_PackagedOilResidue_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_HeavyOilResidue_C",
        amount: 20,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_UnpackageWater_C",
    name: "Unpackage Water",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_PackagedWater_C",
        amount: 120,
      },
    ],
    product: [
      {
        item: "Desc_Water_C",
        amount: 120,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 120,
      },
    ],
  },
  {
    id: "Recipe_Alternate_CoatedIronPlate_C",
    name: "Alternate: Coated Iron Plate",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_IronIngot_C",
        amount: 50,
      },
      {
        item: "Desc_Plastic_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_IronPlate_C",
        amount: 75,
      },
    ],
  },
  {
    id: "Recipe_Alternate_CokeSteelIngot_C",
    name: "Alternate: Coke Steel Ingot",
    alternate: true,
    building: "Build_FoundryMk1_C",
    ingredients: [
      {
        item: "Desc_OreIron_C",
        amount: 75,
      },
      {
        item: "Desc_PetroleumCoke_C",
        amount: 75,
      },
    ],
    product: [
      {
        item: "Desc_SteelIngot_C",
        amount: 100,
      },
    ],
  },
  {
    id: "Recipe_Alternate_CopperAlloyIngot_C",
    name: "Alternate: Copper Alloy Ingot",
    alternate: true,
    building: "Build_FoundryMk1_C",
    ingredients: [
      {
        item: "Desc_OreCopper_C",
        amount: 50,
      },
      {
        item: "Desc_OreIron_C",
        amount: 25,
      },
    ],
    product: [
      {
        item: "Desc_CopperIngot_C",
        amount: 100,
      },
    ],
  },
  {
    id: "Recipe_Alternate_CopperRotor_C",
    name: "Alternate: Copper Rotor",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_CopperSheet_C",
        amount: 22.5,
      },
      {
        item: "Desc_IronScrew_C",
        amount: 195,
      },
    ],
    product: [
      {
        item: "Desc_Rotor_C",
        amount: 11.25,
      },
    ],
  },
  {
    id: "Recipe_Alternate_DilutedPackagedFuel_C",
    name: "Alternate: Diluted Packaged Fuel",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_HeavyOilResidue_C",
        amount: 30,
      },
      {
        item: "Desc_PackagedWater_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_Fuel_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_Alternate_ElectroAluminumScrap_C",
    name: "Alternate: Electrode - Aluminum Scrap",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_AluminaSolution_C",
        amount: 180,
      },
      {
        item: "Desc_PetroleumCoke_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_AluminumScrap_C",
        amount: 300,
      },
      {
        item: "Desc_Water_C",
        amount: 105,
      },
    ],
  },
  {
    id: "Recipe_UraniumCell_C",
    name: "Encased Uranium Cell",
    alternate: false,
    building: "Build_Blender_C",
    ingredients: [
      {
        item: "Desc_OreUranium_C",
        amount: 50,
      },
      {
        item: "Desc_Cement_C",
        amount: 15,
      },
      {
        item: "Desc_SulfuricAcid_C",
        amount: 40,
      },
    ],
    product: [
      {
        item: "Desc_UraniumCell_C",
        amount: 25,
      },
      {
        item: "Desc_SulfuricAcid_C",
        amount: 10,
      },
    ],
  },
  {
    id: "Recipe_CoolingSystem_C",
    name: "Cooling System",
    alternate: false,
    building: "Build_Blender_C",
    ingredients: [
      {
        item: "Desc_AluminumPlateReinforced_C",
        amount: 12,
      },
      {
        item: "Desc_Rubber_C",
        amount: 12,
      },
      {
        item: "Desc_Water_C",
        amount: 30,
      },
      {
        item: "Desc_NitrogenGas_C",
        amount: 150,
      },
    ],
    product: [
      {
        item: "Desc_CoolingSystem_C",
        amount: 6,
      },
    ],
  },
  {
    id: "Recipe_NitricAcid_C",
    name: "Nitric Acid",
    alternate: false,
    building: "Build_Blender_C",
    ingredients: [
      {
        item: "Desc_NitrogenGas_C",
        amount: 120,
      },
      {
        item: "Desc_Water_C",
        amount: 30,
      },
      {
        item: "Desc_IronPlate_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_NitricAcid_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_NonFissileUranium_C",
    name: "Non-fissile Uranium",
    alternate: false,
    building: "Build_Blender_C",
    ingredients: [
      {
        item: "Desc_NuclearWaste_C",
        amount: 37.5,
      },
      {
        item: "Desc_Silica_C",
        amount: 25,
      },
      {
        item: "Desc_NitricAcid_C",
        amount: 15,
      },
      {
        item: "Desc_SulfuricAcid_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_NonFissibleUranium_C",
        amount: 50,
      },
      {
        item: "Desc_Water_C",
        amount: 15,
      },
    ],
  },
  {
    id: "Recipe_AluminumCasing_C",
    name: "Aluminum Casing",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_AluminumIngot_C",
        amount: 90,
      },
    ],
    product: [
      {
        item: "Desc_AluminumCasing_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_AluminumSheet_C",
    name: "Alclad Aluminum Sheet",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_AluminumIngot_C",
        amount: 30,
      },
      {
        item: "Desc_CopperIngot_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_AluminumPlate_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_RadioControlUnit_C",
    name: "Radio Control Unit",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_AluminumCasing_C",
        amount: 40,
      },
      {
        item: "Desc_CrystalOscillator_C",
        amount: 1.25,
      },
      {
        item: "Desc_Computer_C",
        amount: 1.25,
      },
    ],
    product: [
      {
        item: "Desc_ModularFrameLightweight_C",
        amount: 2.5,
      },
    ],
  },
  {
    id: "Recipe_AluminaSolution_C",
    name: "Alumina Solution",
    alternate: false,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_OreBauxite_C",
        amount: 120,
      },
      {
        item: "Desc_Water_C",
        amount: 180,
      },
    ],
    product: [
      {
        item: "Desc_AluminaSolution_C",
        amount: 120,
      },
      {
        item: "Desc_Silica_C",
        amount: 50,
      },
    ],
  },
  {
    id: "Recipe_AluminumScrap_C",
    name: "Aluminum Scrap",
    alternate: false,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_AluminaSolution_C",
        amount: 240,
      },
      {
        item: "Desc_Coal_C",
        amount: 120,
      },
    ],
    product: [
      {
        item: "Desc_AluminumScrap_C",
        amount: 360,
      },
      {
        item: "Desc_Water_C",
        amount: 120,
      },
    ],
  },
  {
    id: "Recipe_PackagedAlumina_C",
    name: "Packaged Alumina Solution",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_AluminaSolution_C",
        amount: 120,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 120,
      },
    ],
    product: [
      {
        item: "Desc_PackagedAlumina_C",
        amount: 120,
      },
    ],
  },
  {
    id: "Recipe_IngotAluminum_C",
    name: "Aluminum Ingot",
    alternate: false,
    building: "Build_FoundryMk1_C",
    ingredients: [
      {
        item: "Desc_AluminumScrap_C",
        amount: 90,
      },
      {
        item: "Desc_Silica_C",
        amount: 75,
      },
    ],
    product: [
      {
        item: "Desc_AluminumIngot_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_QuartzCrystal_C",
    name: "Quartz Crystal",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_RawQuartz_C",
        amount: 37.5,
      },
    ],
    product: [
      {
        item: "Desc_QuartzCrystal_C",
        amount: 22.5,
      },
    ],
  },
  {
    id: "Recipe_Silica_C",
    name: "Silica",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_RawQuartz_C",
        amount: 22.5,
      },
    ],
    product: [
      {
        item: "Desc_Silica_C",
        amount: 37.5,
      },
    ],
  },
  {
    id: "Recipe_CrystalOscillator_C",
    name: "Crystal Oscillator",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_QuartzCrystal_C",
        amount: 18,
      },
      {
        item: "Desc_Cable_C",
        amount: 14,
      },
      {
        item: "Desc_IronPlateReinforced_C",
        amount: 2.5,
      },
    ],
    product: [
      {
        item: "Desc_CrystalOscillator_C",
        amount: 1,
      },
    ],
  },
  {
    id: "Recipe_UnpackageAlumina_C",
    name: "Unpackage Alumina Solution",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_PackagedAlumina_C",
        amount: 120,
      },
    ],
    product: [
      {
        item: "Desc_AluminaSolution_C",
        amount: 120,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 120,
      },
    ],
  },
  {
    id: "Recipe_Alternate_ElectrodeCircuitBoard_C",
    name: "Alternate: Electrode Circuit Board",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_Rubber_C",
        amount: 30,
      },
      {
        item: "Desc_PetroleumCoke_C",
        amount: 45,
      },
    ],
    product: [
      {
        item: "Desc_CircuitBoard_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_FlexibleFramework_C",
    name: "Alternate: Flexible Framework",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_ModularFrame_C",
        amount: 3.75,
      },
      {
        item: "Desc_SteelPlate_C",
        amount: 22.5,
      },
      {
        item: "Desc_Rubber_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_SpaceElevatorPart_2_C",
        amount: 7.5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_FusedWire_C",
    name: "Alternate: Fused Wire",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_CopperIngot_C",
        amount: 12,
      },
      {
        item: "Desc_GoldIngot_C",
        amount: 3,
      },
    ],
    product: [
      {
        item: "Desc_Wire_C",
        amount: 90,
      },
    ],
  },
  {
    id: "Recipe_Alternate_HeavyFlexibleFrame_C",
    name: "Alternate: Heavy Flexible Frame",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_ModularFrame_C",
        amount: 18.75,
      },
      {
        item: "Desc_SteelPlateReinforced_C",
        amount: 11.25,
      },
      {
        item: "Desc_Rubber_C",
        amount: 75,
      },
      {
        item: "Desc_IronScrew_C",
        amount: 390,
      },
    ],
    product: [
      {
        item: "Desc_ModularFrameHeavy_C",
        amount: 3.75,
      },
    ],
  },
  {
    id: "Recipe_Computer_C",
    name: "Computer",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_CircuitBoard_C",
        amount: 25,
      },
      {
        item: "Desc_Cable_C",
        amount: 22.5,
      },
      {
        item: "Desc_Plastic_C",
        amount: 45,
      },
      {
        item: "Desc_IronScrew_C",
        amount: 130,
      },
    ],
    product: [
      {
        item: "Desc_Computer_C",
        amount: 2.5,
      },
    ],
  },
  {
    id: "Recipe_SpaceElevatorPart_4_C",
    name: "Modular Engine",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_Motor_C",
        amount: 2,
      },
      {
        item: "Desc_Rubber_C",
        amount: 15,
      },
      {
        item: "Desc_SpaceElevatorPart_1_C",
        amount: 2,
      },
    ],
    product: [
      {
        item: "Desc_SpaceElevatorPart_4_C",
        amount: 1,
      },
    ],
  },
  {
    id: "Recipe_SpaceElevatorPart_5_C",
    name: "Adaptive Control Unit",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_SpaceElevatorPart_3_C",
        amount: 7.5,
      },
      {
        item: "Desc_CircuitBoard_C",
        amount: 5,
      },
      {
        item: "Desc_ModularFrameHeavy_C",
        amount: 1,
      },
      {
        item: "Desc_Computer_C",
        amount: 1,
      },
    ],
    product: [
      {
        item: "Desc_SpaceElevatorPart_5_C",
        amount: 1,
      },
    ],
  },
  {
    id: "Recipe_Alternate_HeavyOilResidue_C",
    name: "Alternate: Heavy Oil Residue",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_LiquidOil_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_HeavyOilResidue_C",
        amount: 40,
      },
      {
        item: "Desc_PolymerResin_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_Alternate_HighSpeedWiring_C",
    name: "Alternate: Automated Speed Wiring",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_Stator_C",
        amount: 3.75,
      },
      {
        item: "Desc_Wire_C",
        amount: 75,
      },
      {
        item: "Desc_HighSpeedConnector_C",
        amount: 1.875,
      },
    ],
    product: [
      {
        item: "Desc_SpaceElevatorPart_3_C",
        amount: 7.5,
      },
    ],
  },
  {
    id: "Recipe_EncasedIndustrialBeam_C",
    name: "Encased Industrial Beam",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_SteelPlate_C",
        amount: 24,
      },
      {
        item: "Desc_Cement_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_SteelPlateReinforced_C",
        amount: 6,
      },
    ],
  },
  {
    id: "Recipe_Motor_C",
    name: "Motor",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_Rotor_C",
        amount: 10,
      },
      {
        item: "Desc_Stator_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_Motor_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_Stator_C",
    name: "Stator",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_SteelPipe_C",
        amount: 15,
      },
      {
        item: "Desc_Wire_C",
        amount: 40,
      },
    ],
    product: [
      {
        item: "Desc_Stator_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_ModularFrameHeavy_C",
    name: "Heavy Modular Frame",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_ModularFrame_C",
        amount: 10,
      },
      {
        item: "Desc_SteelPipe_C",
        amount: 30,
      },
      {
        item: "Desc_SteelPlateReinforced_C",
        amount: 10,
      },
      {
        item: "Desc_IronScrew_C",
        amount: 200,
      },
    ],
    product: [
      {
        item: "Desc_ModularFrameHeavy_C",
        amount: 2,
      },
    ],
  },
  {
    id: "Recipe_SpaceElevatorPart_3_C",
    name: "Automated Wiring",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_Stator_C",
        amount: 2.5,
      },
      {
        item: "Desc_Cable_C",
        amount: 50,
      },
    ],
    product: [
      {
        item: "Desc_SpaceElevatorPart_3_C",
        amount: 2.5,
      },
    ],
  },
  {
    id: "Recipe_AILimiter_C",
    name: "AI Limiter",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_CopperSheet_C",
        amount: 25,
      },
      {
        item: "Desc_HighSpeedWire_C",
        amount: 100,
      },
    ],
    product: [
      {
        item: "Desc_CircuitBoardHighSpeed_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_PlasticSmartPlating_C",
    name: "Alternate: Plastic Smart Plating",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_IronPlateReinforced_C",
        amount: 2.5,
      },
      {
        item: "Desc_Rotor_C",
        amount: 2.5,
      },
      {
        item: "Desc_Plastic_C",
        amount: 7.5,
      },
    ],
    product: [
      {
        item: "Desc_SpaceElevatorPart_1_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_PolymerResin_C",
    name: "Alternate: Polymer Resin",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_LiquidOil_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_PolymerResin_C",
        amount: 130,
      },
      {
        item: "Desc_HeavyOilResidue_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_PureAluminumIngot_C",
    name: "Alternate: Pure Aluminum Ingot",
    alternate: false,
    building: "Build_SmelterMk1_C",
    ingredients: [
      {
        item: "Desc_AluminumScrap_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_AluminumIngot_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_Alternate_PureCateriumIngot_C",
    name: "Alternate: Pure Caterium Ingot",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_OreGold_C",
        amount: 24,
      },
      {
        item: "Desc_Water_C",
        amount: 24,
      },
    ],
    product: [
      {
        item: "Desc_GoldIngot_C",
        amount: 12,
      },
    ],
  },
  {
    id: "Recipe_Alternate_PureCopperIngot_C",
    name: "Alternate: Pure Copper Ingot",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_OreCopper_C",
        amount: 15,
      },
      {
        item: "Desc_Water_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_CopperIngot_C",
        amount: 37.5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_PureIronIngot_C",
    name: "Alternate: Pure Iron Ingot",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_OreIron_C",
        amount: 35,
      },
      {
        item: "Desc_Water_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_IronIngot_C",
        amount: 65,
      },
    ],
  },
  {
    id: "Recipe_Alternate_PureQuartzCrystal_C",
    name: "Alternate: Pure Quartz Crystal",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_RawQuartz_C",
        amount: 67.5,
      },
      {
        item: "Desc_Water_C",
        amount: 37.5,
      },
    ],
    product: [
      {
        item: "Desc_QuartzCrystal_C",
        amount: 52.5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_RecycledRubber_C",
    name: "Alternate: Recycled Rubber",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_Plastic_C",
        amount: 30,
      },
      {
        item: "Desc_LiquidFuel_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_Rubber_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_Alternate_RubberConcrete_C",
    name: "Alternate: Rubber Concrete",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_Stone_C",
        amount: 50,
      },
      {
        item: "Desc_Rubber_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_Cement_C",
        amount: 45,
      },
    ],
  },
  {
    id: "Recipe_Alternate_SteamedCopperSheet_C",
    name: "Alternate: Steamed Copper Sheet",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_CopperIngot_C",
        amount: 22.5,
      },
      {
        item: "Desc_Water_C",
        amount: 22.5,
      },
    ],
    product: [
      {
        item: "Desc_CopperSheet_C",
        amount: 22.5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_SteelCanister_C",
    name: "Alternate: Steel Canister",
    alternate: true,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_SteelIngot_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_FluidCanister_C",
        amount: 40,
      },
    ],
  },
  {
    id: "Recipe_Alternate_SteelCoatedPlate_C",
    name: "Alternate: Steel Coated Plate",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_SteelIngot_C",
        amount: 7.5,
      },
      {
        item: "Desc_Plastic_C",
        amount: 5,
      },
    ],
    product: [
      {
        item: "Desc_IronPlate_C",
        amount: 45,
      },
    ],
  },
  {
    id: "Recipe_Alternate_SteelRod_C",
    name: "Alternate: Steel Rod",
    alternate: true,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_SteelIngot_C",
        amount: 12,
      },
    ],
    product: [
      {
        item: "Desc_IronRod_C",
        amount: 48,
      },
    ],
  },
  {
    id: "Recipe_SteelBeam_C",
    name: "Steel Beam",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_SteelIngot_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_SteelPlate_C",
        amount: 15,
      },
    ],
  },
  {
    id: "Recipe_SteelPipe_C",
    name: "Steel Pipe",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_SteelIngot_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_SteelPipe_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_IngotSteel_C",
    name: "Steel Ingot",
    alternate: false,
    building: "Build_FoundryMk1_C",
    ingredients: [
      {
        item: "Desc_OreIron_C",
        amount: 45,
      },
      {
        item: "Desc_Coal_C",
        amount: 45,
      },
    ],
    product: [
      {
        item: "Desc_SteelIngot_C",
        amount: 45,
      },
    ],
  },
  {
    id: "Recipe_SpaceElevatorPart_2_C",
    name: "Versatile Framework",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_ModularFrame_C",
        amount: 2.5,
      },
      {
        item: "Desc_SteelPlate_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_SpaceElevatorPart_2_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_TurboHeavyFuel_C",
    name: "Alternate: Turbo Heavy Fuel",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_HeavyOilResidue_C",
        amount: 37.5,
      },
      {
        item: "Desc_CompactedCoal_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_LiquidTurboFuel_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_PackagedTurboFuel_C",
    name: "Packaged Turbofuel",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_LiquidTurboFuel_C",
        amount: 20,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_TurboFuel_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_UnpackageTurboFuel_C",
    name: "Unpackage Turbofuel",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_TurboFuel_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_LiquidTurboFuel_C",
        amount: 20,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Coal_1_C",
    name: "Alternate: Charcoal",
    alternate: true,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_Wood_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_Coal_C",
        amount: 150,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Coal_2_C",
    name: "Alternate: Biocoal",
    alternate: true,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_GenericBiomass_C",
        amount: 37.5,
      },
    ],
    product: [
      {
        item: "Desc_Coal_C",
        amount: 45,
      },
    ],
  },
  {
    id: "Recipe_Alternate_EnrichedCoal_C",
    name: "Alternate: Compacted Coal",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_Coal_C",
        amount: 25,
      },
      {
        item: "Desc_Sulfur_C",
        amount: 25,
      },
    ],
    product: [
      {
        item: "Desc_CompactedCoal_C",
        amount: 25,
      },
    ],
  },
  {
    id: "Recipe_Alternate_WetConcrete_C",
    name: "Alternate: Wet Concrete",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_Stone_C",
        amount: 120,
      },
      {
        item: "Desc_Water_C",
        amount: 100,
      },
    ],
    product: [
      {
        item: "Desc_Cement_C",
        amount: 80,
      },
    ],
  },
  {
    id: "Recipe_Alternate_AlcladCasing_C",
    name: "Alternate: Alclad Casing",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_AluminumIngot_C",
        amount: 150,
      },
      {
        item: "Desc_CopperIngot_C",
        amount: 75,
      },
    ],
    product: [
      {
        item: "Desc_AluminumCasing_C",
        amount: 112.5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_AutomatedMiner_C",
    name: "Alternate: Automated Miner",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_Motor_C",
        amount: 1,
      },
      {
        item: "Desc_SteelPipe_C",
        amount: 4,
      },
      {
        item: "Desc_IronRod_C",
        amount: 4,
      },
      {
        item: "Desc_IronPlate_C",
        amount: 2,
      },
    ],
    product: [
      {
        item: "BP_ItemDescriptorPortableMiner_C",
        amount: 1,
      },
    ],
  },
  {
    id: "Recipe_Battery_C",
    name: "Battery",
    alternate: false,
    building: "Build_Blender_C",
    ingredients: [
      {
        item: "Desc_SulfuricAcid_C",
        amount: 50,
      },
      {
        item: "Desc_AluminaSolution_C",
        amount: 40,
      },
      {
        item: "Desc_AluminumCasing_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_Battery_C",
        amount: 20,
      },
      {
        item: "Desc_Water_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_ComputerSuper_C",
    name: "Supercomputer",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_Computer_C",
        amount: 3.75,
      },
      {
        item: "Desc_CircuitBoardHighSpeed_C",
        amount: 3.75,
      },
      {
        item: "Desc_HighSpeedConnector_C",
        amount: 5.625,
      },
      {
        item: "Desc_Plastic_C",
        amount: 52.5,
      },
    ],
    product: [
      {
        item: "Desc_ComputerSuper_C",
        amount: 1.875,
      },
    ],
  },
  {
    id: "Recipe_SulfuricAcid_C",
    name: "Sulfuric Acid",
    alternate: false,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_Sulfur_C",
        amount: 50,
      },
      {
        item: "Desc_Water_C",
        amount: 50,
      },
    ],
    product: [
      {
        item: "Desc_SulfuricAcid_C",
        amount: 50,
      },
    ],
  },
  {
    id: "Recipe_PackagedSulfuricAcid_C",
    name: "Packaged Sulfuric Acid",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_SulfuricAcid_C",
        amount: 40,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 40,
      },
    ],
    product: [
      {
        item: "Desc_PackagedSulfuricAcid_C",
        amount: 40,
      },
    ],
  },
  {
    id: "Recipe_SpaceElevatorPart_7_C",
    name: "Assembly Director System",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_SpaceElevatorPart_5_C",
        amount: 1.5,
      },
      {
        item: "Desc_ComputerSuper_C",
        amount: 0.75,
      },
    ],
    product: [
      {
        item: "Desc_SpaceElevatorPart_7_C",
        amount: 0.75,
      },
    ],
  },
  {
    id: "Recipe_HighSpeedConnector_C",
    name: "High-Speed Connector",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_HighSpeedWire_C",
        amount: 210,
      },
      {
        item: "Desc_Cable_C",
        amount: 37.5,
      },
      {
        item: "Desc_CircuitBoard_C",
        amount: 3.75,
      },
    ],
    product: [
      {
        item: "Desc_HighSpeedConnector_C",
        amount: 3.75,
      },
    ],
  },
  {
    id: "Recipe_UnpackageSulfuricAcid_C",
    name: "Unpackage Sulfuric Acid",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_PackagedSulfuricAcid_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_SulfuricAcid_C",
        amount: 60,
      },
      {
        item: "Desc_FluidCanister_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_Alternate_CoolingDevice_C",
    name: "Alternate: Cooling Device",
    alternate: true,
    building: "Build_Blender_C",
    ingredients: [
      {
        item: "Desc_AluminumPlateReinforced_C",
        amount: 9.375,
      },
      {
        item: "Desc_Motor_C",
        amount: 1.875,
      },
      {
        item: "Desc_NitrogenGas_C",
        amount: 45,
      },
    ],
    product: [
      {
        item: "Desc_CoolingSystem_C",
        amount: 3.75,
      },
    ],
  },
  {
    id: "Recipe_HeatSink_C",
    name: "Heat Sink",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_AluminumPlate_C",
        amount: 37.5,
      },
      {
        item: "Desc_CopperSheet_C",
        amount: 22.5,
      },
    ],
    product: [
      {
        item: "Desc_AluminumPlateReinforced_C",
        amount: 7.5,
      },
    ],
  },
  {
    id: "Recipe_FusedModularFrame_C",
    name: "Fused Modular Frame",
    alternate: false,
    building: "Build_Blender_C",
    ingredients: [
      {
        item: "Desc_ModularFrameHeavy_C",
        amount: 1.5,
      },
      {
        item: "Desc_AluminumCasing_C",
        amount: 75,
      },
      {
        item: "Desc_NitrogenGas_C",
        amount: 37.5,
      },
    ],
    product: [
      {
        item: "Desc_ModularFrameFused_C",
        amount: 1.5,
      },
    ],
  },
  {
    id: "Recipe_GasTank_C",
    name: "Empty Fluid Tank",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_AluminumIngot_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_GasTank_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_PackagedNitrogen_C",
    name: "Packaged Nitrogen Gas",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_NitrogenGas_C",
        amount: 240,
      },
      {
        item: "Desc_GasTank_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_PackagedNitrogenGas_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_UnpackageNitrogen_C",
    name: "Unpackage Nitrogen Gas",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_PackagedNitrogenGas_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_NitrogenGas_C",
        amount: 240,
      },
      {
        item: "Desc_GasTank_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_Alternate_DilutedFuel_C",
    name: "Alternate: Diluted Fuel",
    alternate: true,
    building: "Build_Blender_C",
    ingredients: [
      {
        item: "Desc_HeavyOilResidue_C",
        amount: 50,
      },
      {
        item: "Desc_Water_C",
        amount: 100,
      },
    ],
    product: [
      {
        item: "Desc_LiquidFuel_C",
        amount: 100,
      },
    ],
  },
  {
    id: "Recipe_Alternate_ElectricMotor_C",
    name: "Alternate: Electric Motor",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_ElectromagneticControlRod_C",
        amount: 3.75,
      },
      {
        item: "Desc_Rotor_C",
        amount: 7.5,
      },
    ],
    product: [
      {
        item: "Desc_Motor_C",
        amount: 7.5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_FertileUranium_C",
    name: "Alternate: Fertile Uranium",
    alternate: true,
    building: "Build_Blender_C",
    ingredients: [
      {
        item: "Desc_OreUranium_C",
        amount: 25,
      },
      {
        item: "Desc_NuclearWaste_C",
        amount: 25,
      },
      {
        item: "Desc_NitricAcid_C",
        amount: 15,
      },
      {
        item: "Desc_SulfuricAcid_C",
        amount: 25,
      },
    ],
    product: [
      {
        item: "Desc_NonFissibleUranium_C",
        amount: 100,
      },
      {
        item: "Desc_Water_C",
        amount: 40,
      },
    ],
  },
  {
    id: "Recipe_PlutoniumCell_C",
    name: "Encased Plutonium Cell",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_PlutoniumPellet_C",
        amount: 10,
      },
      {
        item: "Desc_Cement_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_PlutoniumCell_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_PressureConversionCube_C",
    name: "Pressure Conversion Cube",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_ModularFrameFused_C",
        amount: 1,
      },
      {
        item: "Desc_ModularFrameLightweight_C",
        amount: 2,
      },
    ],
    product: [
      {
        item: "Desc_PressureConversionCube_C",
        amount: 1,
      },
    ],
  },
  {
    id: "Recipe_CopperDust_C",
    name: "Copper Powder",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_CopperIngot_C",
        amount: 300,
      },
    ],
    product: [
      {
        item: "Desc_CopperDust_C",
        amount: 50,
      },
    ],
  },
  {
    id: "Recipe_Plutonium_C",
    name: "Plutonium Pellet",
    alternate: false,
    building: "Build_HadronCollider_C",
    ingredients: [
      {
        item: "Desc_NonFissibleUranium_C",
        amount: 100,
      },
      {
        item: "Desc_NuclearWaste_C",
        amount: 25,
      },
    ],
    product: [
      {
        item: "Desc_PlutoniumPellet_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_PlutoniumFuelRod_C",
    name: "Plutonium Fuel Rod",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_PlutoniumCell_C",
        amount: 7.5,
      },
      {
        item: "Desc_SteelPlate_C",
        amount: 4.5,
      },
      {
        item: "Desc_ElectromagneticControlRod_C",
        amount: 1.5,
      },
      {
        item: "Desc_AluminumPlateReinforced_C",
        amount: 2.5,
      },
    ],
    product: [
      {
        item: "Desc_PlutoniumFuelRod_C",
        amount: 0.25,
      },
    ],
  },
  {
    id: "Recipe_PackagedNitricAcid_C",
    name: "Packaged Nitric Acid",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_NitricAcid_C",
        amount: 30,
      },
      {
        item: "Desc_GasTank_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_PackagedNitricAcid_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_SpaceElevatorPart_9_C",
    name: "Nuclear Pasta",
    alternate: false,
    building: "Build_HadronCollider_C",
    ingredients: [
      {
        item: "Desc_CopperDust_C",
        amount: 100,
      },
      {
        item: "Desc_PressureConversionCube_C",
        amount: 0.5,
      },
    ],
    product: [
      {
        item: "Desc_SpaceElevatorPart_9_C",
        amount: 0.5,
      },
    ],
  },
  {
    id: "Recipe_UnpackageNitricAcid_C",
    name: "Unpackage Nitric Acid",
    alternate: false,
    building: "Build_Packager_C",
    ingredients: [
      {
        item: "Desc_PackagedNitricAcid_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_NitricAcid_C",
        amount: 20,
      },
      {
        item: "Desc_GasTank_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_Alternate_HeatFusedFrame_C",
    name: "Alternate: Heat-Fused Frame",
    alternate: true,
    building: "Build_Blender_C",
    ingredients: [
      {
        item: "Desc_ModularFrameHeavy_C",
        amount: 3,
      },
      {
        item: "Desc_AluminumIngot_C",
        amount: 150,
      },
      {
        item: "Desc_NitricAcid_C",
        amount: 24,
      },
      {
        item: "Desc_LiquidFuel_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_ModularFrameFused_C",
        amount: 3,
      },
    ],
  },
  {
    id: "Recipe_Alternate_InstantPlutoniumCell_C",
    name: "Alternate: Instant Plutonium Cell",
    alternate: true,
    building: "Build_HadronCollider_C",
    ingredients: [
      {
        item: "Desc_NonFissibleUranium_C",
        amount: 75,
      },
      {
        item: "Desc_AluminumCasing_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_PlutoniumCell_C",
        amount: 10,
      },
    ],
  },
  {
    id: "Recipe_Alternate_InstantScrap_C",
    name: "Alternate: Instant Scrap",
    alternate: true,
    building: "Build_Blender_C",
    ingredients: [
      {
        item: "Desc_OreBauxite_C",
        amount: 150,
      },
      {
        item: "Desc_Coal_C",
        amount: 100,
      },
      {
        item: "Desc_SulfuricAcid_C",
        amount: 50,
      },
      {
        item: "Desc_Water_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_AluminumScrap_C",
        amount: 300,
      },
      {
        item: "Desc_Water_C",
        amount: 50,
      },
    ],
  },
  {
    id: "Recipe_Alternate_OCSupercomputer_C",
    name: "Alternate: OC Supercomputer",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_ModularFrameLightweight_C",
        amount: 9,
      },
      {
        item: "Desc_CoolingSystem_C",
        amount: 9,
      },
    ],
    product: [
      {
        item: "Desc_ComputerSuper_C",
        amount: 3,
      },
    ],
  },
  {
    id: "Recipe_Alternate_PlutoniumFuelUnit_C",
    name: "Alternate: Plutonium Fuel Unit",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_PlutoniumCell_C",
        amount: 10,
      },
      {
        item: "Desc_PressureConversionCube_C",
        amount: 0.5,
      },
    ],
    product: [
      {
        item: "Desc_PlutoniumFuelRod_C",
        amount: 0.5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_RadioControlSystem_C",
    name: "Alternate: Radio Control System",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_CrystalOscillator_C",
        amount: 1.5,
      },
      {
        item: "Desc_CircuitBoard_C",
        amount: 15,
      },
      {
        item: "Desc_AluminumCasing_C",
        amount: 90,
      },
      {
        item: "Desc_Rubber_C",
        amount: 45,
      },
    ],
    product: [
      {
        item: "Desc_ModularFrameLightweight_C",
        amount: 4.5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_SloppyAlumina_C",
    name: "Alternate: Sloppy Alumina",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_OreBauxite_C",
        amount: 200,
      },
      {
        item: "Desc_Water_C",
        amount: 200,
      },
    ],
    product: [
      {
        item: "Desc_AluminaSolution_C",
        amount: 240,
      },
    ],
  },
  {
    id: "Recipe_Alternate_SuperStateComputer_C",
    name: "Alternate: Super-State Computer",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_Computer_C",
        amount: 3.5999999999999996,
      },
      {
        item: "Desc_ElectromagneticControlRod_C",
        amount: 2.4,
      },
      {
        item: "Desc_Battery_C",
        amount: 24,
      },
      {
        item: "Desc_Wire_C",
        amount: 54,
      },
    ],
    product: [
      {
        item: "Desc_ComputerSuper_C",
        amount: 2.4,
      },
    ],
  },
  {
    id: "Recipe_ElectromagneticControlRod_C",
    name: "Electromagnetic Control Rod",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_Stator_C",
        amount: 6,
      },
      {
        item: "Desc_CircuitBoardHighSpeed_C",
        amount: 4,
      },
    ],
    product: [
      {
        item: "Desc_ElectromagneticControlRod_C",
        amount: 4,
      },
    ],
  },
  {
    id: "Recipe_NuclearFuelRod_C",
    name: "Uranium Fuel Rod",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_UraniumCell_C",
        amount: 20,
      },
      {
        item: "Desc_SteelPlateReinforced_C",
        amount: 1.2000000000000002,
      },
      {
        item: "Desc_ElectromagneticControlRod_C",
        amount: 2,
      },
    ],
    product: [
      {
        item: "Desc_NuclearFuelRod_C",
        amount: 0.4,
      },
    ],
  },
  {
    id: "Recipe_SpaceElevatorPart_6_C",
    name: "Magnetic Field Generator",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_SpaceElevatorPart_2_C",
        amount: 2.5,
      },
      {
        item: "Desc_ElectromagneticControlRod_C",
        amount: 1,
      },
      {
        item: "Desc_Battery_C",
        amount: 5,
      },
    ],
    product: [
      {
        item: "Desc_SpaceElevatorPart_6_C",
        amount: 1,
      },
    ],
  },
  {
    id: "Recipe_Alternate_TurboBlendFuel_C",
    name: "Alternate: Turbo Blend Fuel",
    alternate: true,
    building: "Build_Blender_C",
    ingredients: [
      {
        item: "Desc_LiquidFuel_C",
        amount: 15,
      },
      {
        item: "Desc_HeavyOilResidue_C",
        amount: 30,
      },
      {
        item: "Desc_Sulfur_C",
        amount: 22.5,
      },
      {
        item: "Desc_PetroleumCoke_C",
        amount: 22.5,
      },
    ],
    product: [
      {
        item: "Desc_LiquidTurboFuel_C",
        amount: 45,
      },
    ],
  },
  {
    id: "Recipe_Alternate_TurboPressureMotor_C",
    name: "Alternate: Turbo Pressure Motor",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_Motor_C",
        amount: 7.5,
      },
      {
        item: "Desc_PressureConversionCube_C",
        amount: 1.875,
      },
      {
        item: "Desc_PackagedNitrogenGas_C",
        amount: 45,
      },
      {
        item: "Desc_Stator_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_MotorLightweight_C",
        amount: 3.75,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Beacon_1_C",
    name: "Alternate: Crystal Beacon",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_SteelPlate_C",
        amount: 2,
      },
      {
        item: "Desc_SteelPipe_C",
        amount: 8,
      },
      {
        item: "Desc_CrystalOscillator_C",
        amount: 0.5,
      },
    ],
    product: [
      {
        item: "BP_EquipmentDescriptorBeacon_C",
        amount: 10,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Cable_1_C",
    name: "Alternate: Insulated Cable",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_Wire_C",
        amount: 45,
      },
      {
        item: "Desc_Rubber_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_Cable_C",
        amount: 100,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Cable_2_C",
    name: "Alternate: Quickwire Cable",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_HighSpeedWire_C",
        amount: 7.5,
      },
      {
        item: "Desc_Rubber_C",
        amount: 5,
      },
    ],
    product: [
      {
        item: "Desc_Cable_C",
        amount: 27.5,
      },
    ],
  },
  {
    id: "Recipe_IngotCaterium_C",
    name: "Caterium Ingot",
    alternate: false,
    building: "Build_SmelterMk1_C",
    ingredients: [
      {
        item: "Desc_OreGold_C",
        amount: 45,
      },
    ],
    product: [
      {
        item: "Desc_GoldIngot_C",
        amount: 15,
      },
    ],
  },
  {
    id: "Recipe_Alternate_CircuitBoard_1_C",
    name: "Alternate: Silicon Circuit Board",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_CopperSheet_C",
        amount: 27.5,
      },
      {
        item: "Desc_Silica_C",
        amount: 27.5,
      },
    ],
    product: [
      {
        item: "Desc_CircuitBoard_C",
        amount: 12.5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_CircuitBoard_2_C",
    name: "Alternate: Caterium Circuit Board",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_Plastic_C",
        amount: 12.5,
      },
      {
        item: "Desc_HighSpeedWire_C",
        amount: 37.5,
      },
    ],
    product: [
      {
        item: "Desc_CircuitBoard_C",
        amount: 8.75,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Computer_1_C",
    name: "Alternate: Caterium Computer",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_CircuitBoard_C",
        amount: 26.25,
      },
      {
        item: "Desc_HighSpeedWire_C",
        amount: 105,
      },
      {
        item: "Desc_Rubber_C",
        amount: 45,
      },
    ],
    product: [
      {
        item: "Desc_Computer_C",
        amount: 3.75,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Computer_2_C",
    name: "Alternate: Crystal Computer",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_CircuitBoard_C",
        amount: 7.5,
      },
      {
        item: "Desc_CrystalOscillator_C",
        amount: 2.8125,
      },
    ],
    product: [
      {
        item: "Desc_Computer_C",
        amount: 2.8125,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Concrete_C",
    name: "Alternate: Fine Concrete",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_Silica_C",
        amount: 7.5,
      },
      {
        item: "Desc_Stone_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_Cement_C",
        amount: 25,
      },
    ],
  },
  {
    id: "Recipe_Alternate_CrystalOscillator_C",
    name: "Alternate: Insulated Crystal Oscillator",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_QuartzCrystal_C",
        amount: 18.75,
      },
      {
        item: "Desc_Rubber_C",
        amount: 13.125,
      },
      {
        item: "Desc_CircuitBoardHighSpeed_C",
        amount: 1.875,
      },
    ],
    product: [
      {
        item: "Desc_CrystalOscillator_C",
        amount: 1.875,
      },
    ],
  },
  {
    id: "Recipe_Alternate_ElectromagneticControlRod_1_C",
    name: "Alternate: Electromagnetic Connection Rod",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_Stator_C",
        amount: 8,
      },
      {
        item: "Desc_HighSpeedConnector_C",
        amount: 4,
      },
    ],
    product: [
      {
        item: "Desc_ElectromagneticControlRod_C",
        amount: 8,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Gunpowder_1_C",
    name: "Alternate: Fine Black Powder",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_Sulfur_C",
        amount: 7.5,
      },
      {
        item: "Desc_CompactedCoal_C",
        amount: 3.75,
      },
    ],
    product: [
      {
        item: "Desc_Gunpowder_C",
        amount: 15,
      },
    ],
  },
  {
    id: "Recipe_Alternate_HeatSink_1_C",
    name: "Alternate: Heat Exchanger",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_AluminumCasing_C",
        amount: 30,
      },
      {
        item: "Desc_Rubber_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_AluminumPlateReinforced_C",
        amount: 10,
      },
    ],
  },
  {
    id: "Recipe_Alternate_ModularFrameHeavy_C",
    name: "Alternate: Heavy Encased Frame",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_ModularFrame_C",
        amount: 7.5,
      },
      {
        item: "Desc_SteelPlateReinforced_C",
        amount: 9.375,
      },
      {
        item: "Desc_SteelPipe_C",
        amount: 33.75,
      },
      {
        item: "Desc_Cement_C",
        amount: 20.625,
      },
    ],
    product: [
      {
        item: "Desc_ModularFrameHeavy_C",
        amount: 2.8125,
      },
    ],
  },
  {
    id: "Recipe_Alternate_HighSpeedConnector_C",
    name: "Alternate: Silicon High-Speed Connector",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_HighSpeedWire_C",
        amount: 90,
      },
      {
        item: "Desc_Silica_C",
        amount: 37.5,
      },
      {
        item: "Desc_CircuitBoard_C",
        amount: 3,
      },
    ],
    product: [
      {
        item: "Desc_HighSpeedConnector_C",
        amount: 3,
      },
    ],
  },
  {
    id: "Recipe_Alternate_IngotIron_C",
    name: "Alternate: Iron Alloy Ingot",
    alternate: true,
    building: "Build_FoundryMk1_C",
    ingredients: [
      {
        item: "Desc_OreIron_C",
        amount: 20,
      },
      {
        item: "Desc_OreCopper_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_IronIngot_C",
        amount: 50,
      },
    ],
  },
  {
    id: "Recipe_Alternate_IngotSteel_1_C",
    name: "Alternate: Solid Steel Ingot",
    alternate: true,
    building: "Build_FoundryMk1_C",
    ingredients: [
      {
        item: "Desc_IronIngot_C",
        amount: 40,
      },
      {
        item: "Desc_Coal_C",
        amount: 40,
      },
    ],
    product: [
      {
        item: "Desc_SteelIngot_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_Alternate_IngotSteel_2_C",
    name: "Alternate: Compacted Steel Ingot",
    alternate: true,
    building: "Build_FoundryMk1_C",
    ingredients: [
      {
        item: "Desc_OreIron_C",
        amount: 22.5,
      },
      {
        item: "Desc_CompactedCoal_C",
        amount: 11.25,
      },
    ],
    product: [
      {
        item: "Desc_SteelIngot_C",
        amount: 37.5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_ModularFrame_C",
    name: "Alternate: Steeled Frame",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_IronPlateReinforced_C",
        amount: 2,
      },
      {
        item: "Desc_SteelPipe_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_ModularFrame_C",
        amount: 3,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Motor_1_C",
    name: "Alternate: Rigour Motor",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_Rotor_C",
        amount: 3.75,
      },
      {
        item: "Desc_Stator_C",
        amount: 3.75,
      },
      {
        item: "Desc_CrystalOscillator_C",
        amount: 1.25,
      },
    ],
    product: [
      {
        item: "Desc_Motor_C",
        amount: 7.5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_NuclearFuelRod_1_C",
    name: "Alternate: Uranium Fuel Unit",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_UraniumCell_C",
        amount: 20,
      },
      {
        item: "Desc_ElectromagneticControlRod_C",
        amount: 2,
      },
      {
        item: "Desc_CrystalOscillator_C",
        amount: 0.6000000000000001,
      },
      {
        item: "BP_EquipmentDescriptorBeacon_C",
        amount: 1.2000000000000002,
      },
    ],
    product: [
      {
        item: "Desc_NuclearFuelRod_C",
        amount: 0.6000000000000001,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Plastic_1_C",
    name: "Alternate: Recycled Plastic",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_Rubber_C",
        amount: 30,
      },
      {
        item: "Desc_LiquidFuel_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_Plastic_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Quickwire_C",
    name: "Alternate: Fused Quickwire",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_GoldIngot_C",
        amount: 7.5,
      },
      {
        item: "Desc_CopperIngot_C",
        amount: 37.5,
      },
    ],
    product: [
      {
        item: "Desc_HighSpeedWire_C",
        amount: 90,
      },
    ],
  },
  {
    id: "Recipe_Alternate_RadioControlUnit_1_C",
    name: "Alternate: Radio Connection Unit",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_AluminumPlateReinforced_C",
        amount: 15,
      },
      {
        item: "Desc_HighSpeedConnector_C",
        amount: 7.5,
      },
      {
        item: "Desc_QuartzCrystal_C",
        amount: 45,
      },
    ],
    product: [
      {
        item: "Desc_ModularFrameLightweight_C",
        amount: 3.75,
      },
    ],
  },
  {
    id: "Recipe_Alternate_ReinforcedIronPlate_1_C",
    name: "Alternate: Bolted Iron Plate",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_IronPlate_C",
        amount: 90,
      },
      {
        item: "Desc_IronScrew_C",
        amount: 250,
      },
    ],
    product: [
      {
        item: "Desc_IronPlateReinforced_C",
        amount: 15,
      },
    ],
  },
  {
    id: "Recipe_Alternate_ReinforcedIronPlate_2_C",
    name: "Alternate: Stitched Iron Plate",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_IronPlate_C",
        amount: 18.75,
      },
      {
        item: "Desc_Wire_C",
        amount: 37.5,
      },
    ],
    product: [
      {
        item: "Desc_IronPlateReinforced_C",
        amount: 5.625,
      },
    ],
  },
  {
    id: "Recipe_Alternate_EncasedIndustrialBeam_C",
    name: "Alternate: Encased Industrial Pipe",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_SteelPipe_C",
        amount: 28,
      },
      {
        item: "Desc_Cement_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_SteelPlateReinforced_C",
        amount: 4,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Rotor_C",
    name: "Alternate: Steel Rotor",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_SteelPipe_C",
        amount: 10,
      },
      {
        item: "Desc_Wire_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_Rotor_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Screw_C",
    name: "Alternate: Cast Screw",
    alternate: true,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_IronIngot_C",
        amount: 12.5,
      },
    ],
    product: [
      {
        item: "Desc_IronScrew_C",
        amount: 50,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Screw_2_C",
    name: "Alternate: Steel Screw",
    alternate: true,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_SteelPlate_C",
        amount: 5,
      },
    ],
    product: [
      {
        item: "Desc_IronScrew_C",
        amount: 260,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Silica_C",
    name: "Alternate: Cheap Silica",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_RawQuartz_C",
        amount: 11.25,
      },
      {
        item: "Desc_Stone_C",
        amount: 18.75,
      },
    ],
    product: [
      {
        item: "Desc_Silica_C",
        amount: 26.25,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Stator_C",
    name: "Alternate: Quickwire Stator",
    alternate: true,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_SteelPipe_C",
        amount: 16,
      },
      {
        item: "Desc_HighSpeedWire_C",
        amount: 60,
      },
    ],
    product: [
      {
        item: "Desc_Stator_C",
        amount: 8,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Turbofuel_C",
    name: "Turbofuel",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_LiquidFuel_C",
        amount: 22.5,
      },
      {
        item: "Desc_CompactedCoal_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_LiquidTurboFuel_C",
        amount: 18.75,
      },
    ],
  },
  {
    id: "Recipe_Alternate_TurboMotor_1_C",
    name: "Alternate: Turbo Electric Motor",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_Motor_C",
        amount: 6.5625,
      },
      {
        item: "Desc_ModularFrameLightweight_C",
        amount: 8.4375,
      },
      {
        item: "Desc_ElectromagneticControlRod_C",
        amount: 4.6875,
      },
      {
        item: "Desc_Rotor_C",
        amount: 6.5625,
      },
    ],
    product: [
      {
        item: "Desc_MotorLightweight_C",
        amount: 2.8125,
      },
    ],
  },
  {
    id: "Recipe_MotorTurbo_C",
    name: "Turbo Motor",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_CoolingSystem_C",
        amount: 7.5,
      },
      {
        item: "Desc_ModularFrameLightweight_C",
        amount: 3.75,
      },
      {
        item: "Desc_Motor_C",
        amount: 7.5,
      },
      {
        item: "Desc_Rubber_C",
        amount: 45,
      },
    ],
    product: [
      {
        item: "Desc_MotorLightweight_C",
        amount: 1.875,
      },
    ],
  },
  {
    id: "Recipe_SpaceElevatorPart_8_C",
    name: "Thermal Propulsion Rocket",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_SpaceElevatorPart_4_C",
        amount: 2.5,
      },
      {
        item: "Desc_MotorLightweight_C",
        amount: 1,
      },
      {
        item: "Desc_CoolingSystem_C",
        amount: 3,
      },
      {
        item: "Desc_ModularFrameFused_C",
        amount: 1,
      },
    ],
    product: [
      {
        item: "Desc_SpaceElevatorPart_8_C",
        amount: 1,
      },
    ],
  },
  {
    id: "Recipe_Alternate_UraniumCell_1_C",
    name: "Alternate: Infused Uranium Cell",
    alternate: true,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_OreUranium_C",
        amount: 25,
      },
      {
        item: "Desc_Silica_C",
        amount: 15,
      },
      {
        item: "Desc_Sulfur_C",
        amount: 25,
      },
      {
        item: "Desc_HighSpeedWire_C",
        amount: 75,
      },
    ],
    product: [
      {
        item: "Desc_UraniumCell_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Wire_1_C",
    name: "Alternate: Iron Wire",
    alternate: true,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_IronIngot_C",
        amount: 12.5,
      },
    ],
    product: [
      {
        item: "Desc_Wire_C",
        amount: 22.5,
      },
    ],
  },
  {
    id: "Recipe_Alternate_Wire_2_C",
    name: "Alternate: Caterium Wire",
    alternate: true,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_GoldIngot_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_Wire_C",
        amount: 120,
      },
    ],
  },
  {
    id: "Recipe_Beacon_C",
    name: "Beacon",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_IronPlate_C",
        amount: 22.5,
      },
      {
        item: "Desc_IronRod_C",
        amount: 7.5,
      },
      {
        item: "Desc_Wire_C",
        amount: 112.5,
      },
      {
        item: "Desc_Cable_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "BP_EquipmentDescriptorBeacon_C",
        amount: 7.5,
      },
    ],
  },
  {
    id: "Recipe_Biofuel_C",
    name: "Solid Biofuel",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_GenericBiomass_C",
        amount: 120,
      },
    ],
    product: [
      {
        item: "Desc_Biofuel_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_FilterGasMask_C",
    name: "Gas Filter",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_Coal_C",
        amount: 37.5,
      },
      {
        item: "Desc_Rubber_C",
        amount: 15,
      },
      {
        item: "Desc_Fabric_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_Filter_C",
        amount: 7.5,
      },
    ],
  },
  {
    id: "Recipe_FilterHazmat_C",
    name: "Iodine Infused Filter",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_Filter_C",
        amount: 3.75,
      },
      {
        item: "Desc_HighSpeedWire_C",
        amount: 30,
      },
      {
        item: "Desc_AluminumCasing_C",
        amount: 3.75,
      },
    ],
    product: [
      {
        item: "Desc_HazmatFilter_C",
        amount: 3.75,
      },
    ],
  },
  {
    id: "Recipe_Protein_Hog_C",
    name: "Hog Protein",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_HogParts_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_AlienProtein_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_SpikedRebar_C",
    name: "Iron Rebar",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_IronRod_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_SpikedRebar_C",
        amount: 15,
      },
    ],
  },
  {
    id: "Recipe_Protein_Spitter_C",
    name: "Spitter Protein",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_SpitterParts_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_AlienProtein_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_AlienDNACapsule_C",
    name: "Organic Data Capsule",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_AlienProtein_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_AlienDNACapsule_C",
        amount: 10,
      },
    ],
  },
  {
    id: "Recipe_Biomass_AlienProtein_C",
    name: "Biomass (Alien Protein)",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_AlienProtein_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_GenericBiomass_C",
        amount: 1500,
      },
    ],
  },
  {
    id: "Recipe_Protein_Crab_C",
    name: "Hatcher Protein",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_HatcherParts_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_AlienProtein_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_Protein_Stinger_C",
    name: "Stinger Protein",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_StingerParts_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_AlienProtein_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_Quickwire_C",
    name: "Quickwire",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_GoldIngot_C",
        amount: 12,
      },
    ],
    product: [
      {
        item: "Desc_HighSpeedWire_C",
        amount: 60,
      },
    ],
  },
  {
    id: "Recipe_Rebar_Stunshot_C",
    name: "Stun Rebar",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_SpikedRebar_C",
        amount: 10,
      },
      {
        item: "Desc_HighSpeedWire_C",
        amount: 50,
      },
    ],
    product: [
      {
        item: "Desc_Rebar_Stunshot_C",
        amount: 10,
      },
    ],
  },
  {
    id: "Recipe_CartridgeSmart_C",
    name: "Homing Rifle Ammo",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_CartridgeStandard_C",
        amount: 50,
      },
      {
        item: "Desc_HighSpeedConnector_C",
        amount: 2.5,
      },
    ],
    product: [
      {
        item: "Desc_CartridgeSmartProjectile_C",
        amount: 25,
      },
    ],
  },
  {
    id: "Recipe_Biomass_Mycelia_C",
    name: "Biomass (Mycelia)",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_Mycelia_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_GenericBiomass_C",
        amount: 150,
      },
    ],
  },
  {
    id: "Recipe_Fabric_C",
    name: "Fabric",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_Mycelia_C",
        amount: 15,
      },
      {
        item: "Desc_GenericBiomass_C",
        amount: 75,
      },
    ],
    product: [
      {
        item: "Desc_Fabric_C",
        amount: 15,
      },
    ],
  },
  {
    id: "Recipe_Alternate_PolyesterFabric_C",
    name: "Alternate: Polyester Fabric",
    alternate: true,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_PolymerResin_C",
        amount: 30,
      },
      {
        item: "Desc_Water_C",
        amount: 30,
      },
    ],
    product: [
      {
        item: "Desc_Fabric_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_NobeliskGas_C",
    name: "Gas Nobelisk",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_NobeliskExplosive_C",
        amount: 5,
      },
      {
        item: "Desc_GenericBiomass_C",
        amount: 50,
      },
    ],
    product: [
      {
        item: "Desc_NobeliskGas_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_PowerCrystalShard_1_C",
    name: "Power Shard (1)",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_Crystal_C",
        amount: 7.5,
      },
    ],
    product: [
      {
        item: "Desc_CrystalShard_C",
        amount: 7.5,
      },
    ],
  },
  {
    id: "Recipe_PowerCrystalShard_2_C",
    name: "Power Shard (2)",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_Crystal_mk2_C",
        amount: 5,
      },
    ],
    product: [
      {
        item: "Desc_CrystalShard_C",
        amount: 10,
      },
    ],
  },
  {
    id: "Recipe_PowerCrystalShard_3_C",
    name: "Power Shard (5)",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_Crystal_mk3_C",
        amount: 2.5,
      },
    ],
    product: [
      {
        item: "Desc_CrystalShard_C",
        amount: 12.5,
      },
    ],
  },
  {
    id: "Recipe_Rebar_Spreadshot_C",
    name: "Shatter Rebar",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_SpikedRebar_C",
        amount: 10,
      },
      {
        item: "Desc_QuartzCrystal_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_Rebar_Spreadshot_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_NobeliskShockwave_C",
    name: "Pulse Nobelisk",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_NobeliskExplosive_C",
        amount: 5,
      },
      {
        item: "Desc_CrystalOscillator_C",
        amount: 1,
      },
    ],
    product: [
      {
        item: "Desc_NobeliskShockwave_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_Gunpowder_C",
    name: "Black Powder",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_Coal_C",
        amount: 15,
      },
      {
        item: "Desc_Sulfur_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_Gunpowder_C",
        amount: 30,
      },
    ],
  },
  {
    id: "Recipe_GunpowderMK2_C",
    name: "Smokeless Powder",
    alternate: false,
    building: "Build_OilRefinery_C",
    ingredients: [
      {
        item: "Desc_Gunpowder_C",
        amount: 20,
      },
      {
        item: "Desc_HeavyOilResidue_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_GunpowderMK2_C",
        amount: 20,
      },
    ],
  },
  {
    id: "Recipe_Nobelisk_C",
    name: "Nobelisk",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_Gunpowder_C",
        amount: 20,
      },
      {
        item: "Desc_SteelPipe_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_NobeliskExplosive_C",
        amount: 10,
      },
    ],
  },
  {
    id: "Recipe_NobeliskCluster_C",
    name: "Cluster Nobelisk",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_NobeliskExplosive_C",
        amount: 7.5,
      },
      {
        item: "Desc_GunpowderMK2_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_NobeliskCluster_C",
        amount: 2.5,
      },
    ],
  },
  {
    id: "Recipe_Cartridge_C",
    name: "Rifle Ammo",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_CopperSheet_C",
        amount: 15,
      },
      {
        item: "Desc_GunpowderMK2_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_CartridgeStandard_C",
        amount: 75,
      },
    ],
  },
  {
    id: "Recipe_Rebar_Explosive_C",
    name: "Explosive Rebar",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_SpikedRebar_C",
        amount: 10,
      },
      {
        item: "Desc_GunpowderMK2_C",
        amount: 10,
      },
      {
        item: "Desc_SteelPipe_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_Rebar_Explosive_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_NobeliskNuke_C",
    name: "Nuke Nobelisk",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_NobeliskExplosive_C",
        amount: 2.5,
      },
      {
        item: "Desc_UraniumCell_C",
        amount: 10,
      },
      {
        item: "Desc_GunpowderMK2_C",
        amount: 5,
      },
      {
        item: "Desc_CircuitBoardHighSpeed_C",
        amount: 3,
      },
    ],
    product: [
      {
        item: "Desc_NobeliskNuke_C",
        amount: 0.5,
      },
    ],
  },
  {
    id: "Recipe_CartridgeChaos_C",
    name: "Turbo Rifle Ammo",
    alternate: false,
    building: "Build_Blender_C",
    ingredients: [
      {
        item: "Desc_CartridgeStandard_C",
        amount: 125,
      },
      {
        item: "Desc_AluminumCasing_C",
        amount: 15,
      },
      {
        item: "Desc_LiquidTurboFuel_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_CartridgeChaos_C",
        amount: 250,
      },
    ],
  },
  {
    id: "Recipe_CartridgeChaos_Packaged_C",
    name: "Turbo Rifle Ammo",
    alternate: false,
    building: "Build_ManufacturerMk1_C",
    ingredients: [
      {
        item: "Desc_CartridgeStandard_C",
        amount: 125,
      },
      {
        item: "Desc_AluminumCasing_C",
        amount: 15,
      },
      {
        item: "Desc_TurboFuel_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_CartridgeChaos_C",
        amount: 250,
      },
    ],
  },
  {
    id: "Recipe_CandyCane_C",
    name: "Candy Cane",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_Gift_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_CandyCane_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_XmasBow_C",
    name: "FICSMAS Bow",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_Gift_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_XmasBow_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_Snow_C",
    name: "Actual Snow",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_Gift_C",
        amount: 25,
      },
    ],
    product: [
      {
        item: "Desc_Snow_C",
        amount: 10,
      },
    ],
  },
  {
    id: "Recipe_XmasBall3_C",
    name: "Copper FICSMAS Ornament",
    alternate: false,
    building: "Build_FoundryMk1_C",
    ingredients: [
      {
        item: "Desc_XmasBall1_C",
        amount: 10,
      },
      {
        item: "Desc_CopperIngot_C",
        amount: 10,
      },
    ],
    product: [
      {
        item: "Desc_XmasBall3_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_XmasBall4_C",
    name: "Iron FICSMAS Ornament",
    alternate: false,
    building: "Build_FoundryMk1_C",
    ingredients: [
      {
        item: "Desc_XmasBall2_C",
        amount: 15,
      },
      {
        item: "Desc_IronIngot_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_XmasBall4_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_XmasBall1_C",
    name: "Red FICSMAS Ornament",
    alternate: false,
    building: "Build_SmelterMk1_C",
    ingredients: [
      {
        item: "Desc_Gift_C",
        amount: 5,
      },
    ],
    product: [
      {
        item: "Desc_XmasBall1_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_XmasBall2_C",
    name: "Blue FICSMAS Ornament",
    alternate: false,
    building: "Build_SmelterMk1_C",
    ingredients: [
      {
        item: "Desc_Gift_C",
        amount: 5,
      },
    ],
    product: [
      {
        item: "Desc_XmasBall2_C",
        amount: 10,
      },
    ],
  },
  {
    id: "Recipe_XmasBallCluster_C",
    name: "FICSMAS Ornament Bundle",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_XmasBall3_C",
        amount: 5,
      },
      {
        item: "Desc_XmasBall4_C",
        amount: 5,
      },
    ],
    product: [
      {
        item: "Desc_XmasBallCluster_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Recipe_XmasWreath_C",
    name: "FICSMAS Decoration",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_XmasBranch_C",
        amount: 15,
      },
      {
        item: "Desc_XmasBallCluster_C",
        amount: 6,
      },
    ],
    product: [
      {
        item: "Desc_XmasWreath_C",
        amount: 2,
      },
    ],
  },
  {
    id: "Recipe_XmasStar_C",
    name: "FICSMAS Wonder Star",
    alternate: false,
    building: "Build_AssemblerMk1_C",
    ingredients: [
      {
        item: "Desc_XmasWreath_C",
        amount: 5,
      },
      {
        item: "Desc_CandyCane_C",
        amount: 20,
      },
    ],
    product: [
      {
        item: "Desc_XmasStar_C",
        amount: 1,
      },
    ],
  },
  {
    id: "Recipe_Snowball_C",
    name: "Snowball",
    alternate: false,
    building: "Build_ConstructorMk1_C",
    ingredients: [
      {
        item: "Desc_Snow_C",
        amount: 15,
      },
    ],
    product: [
      {
        item: "Desc_SnowballProjectile_C",
        amount: 5,
      },
    ],
  },
  {
    id: "Build_GeneratorCoal_CDesc_Coal_C",
    name: "Generate Power",
    building: "Build_GeneratorCoal_C",
    product: [],
    ingredients: [
      {
        item: "Desc_Coal_C",
        amount: 15,
      },
      {
        item: "Desc_Water_C",
        amount: 45,
      },
    ],
    alternate: false,
  },
  {
    id: "Build_GeneratorCoal_CDesc_CompactedCoal_C",
    name: "Generate Power",
    building: "Build_GeneratorCoal_C",
    product: [],
    ingredients: [
      {
        item: "Desc_CompactedCoal_C",
        amount: 7.142857142857143,
      },
      {
        item: "Desc_Water_C",
        amount: 45,
      },
    ],
    alternate: false,
  },
  {
    id: "Build_GeneratorCoal_CDesc_PetroleumCoke_C",
    name: "Generate Power",
    building: "Build_GeneratorCoal_C",
    product: [],
    ingredients: [
      {
        item: "Desc_PetroleumCoke_C",
        amount: 25,
      },
      {
        item: "Desc_Water_C",
        amount: 45,
      },
    ],
    alternate: false,
  },
  {
    id: "Build_GeneratorFuel_CDesc_LiquidFuel_C",
    name: "Generate Power",
    building: "Build_GeneratorFuel_C",
    product: [],
    ingredients: [
      {
        item: "Desc_LiquidFuel_C",
        amount: 12,
      },
    ],
    alternate: false,
  },
  {
    id: "Build_GeneratorFuel_CDesc_LiquidTurboFuel_C",
    name: "Generate Power",
    building: "Build_GeneratorFuel_C",
    product: [],
    ingredients: [
      {
        item: "Desc_LiquidTurboFuel_C",
        amount: 4.5,
      },
    ],
    alternate: false,
  },
  {
    id: "Build_GeneratorFuel_CDesc_LiquidBiofuel_C",
    name: "Generate Power",
    building: "Build_GeneratorFuel_C",
    product: [],
    ingredients: [
      {
        item: "Desc_LiquidBiofuel_C",
        amount: 12,
      },
    ],
    alternate: false,
  },
  {
    id: "Build_GeneratorNuclear_CDesc_NuclearFuelRod_C",
    name: "Generate Power",
    building: "Build_GeneratorNuclear_C",
    product: [
      {
        item: "Desc_NuclearWaste_C",
        amount: 10,
      },
    ],
    ingredients: [
      {
        item: "Desc_NuclearFuelRod_C",
        amount: 0.2,
      },
      {
        item: "Desc_Water_C",
        amount: 300,
      },
    ],
    alternate: false,
  },
  {
    id: "Build_GeneratorNuclear_CDesc_PlutoniumFuelRod_C",
    name: "Generate Power",
    building: "Build_GeneratorNuclear_C",
    product: [
      {
        item: "Desc_PlutoniumWaste_C",
        amount: 1,
      },
    ],
    ingredients: [
      {
        item: "Desc_PlutoniumFuelRod_C",
        amount: 0.1,
      },
      {
        item: "Desc_Water_C",
        amount: 300,
      },
    ],
    alternate: false,
  },
] as Recipe[];
