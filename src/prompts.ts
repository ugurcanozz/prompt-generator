export interface IPromptRow {
  id: number;
  rawText: string;
}

const prompts: IPromptRow[] = [
  "A full portrait of {INSTANCE_PROMPT} {CLASS_PROMPT} post apocalyptic offworld technothief, intricate, elegant, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration, art by Krenz Cushart and Artem Demura and alphonse mucha",
  "portrait of {INSTANCE_PROMPT} {CLASS_PROMPT} easygoing pirate, red hair, long hair, d & d, fantasy, intricate, elegant, highly detailed, digital painting, artstation, concept art, matte, sharp focus, illustration, art by artgerm and greg rutkowski and alphonse mucha",
  "symmetry!! {INSTANCE_PROMPT} {CLASS_PROMPT}, machine parts embedded into face, intricate, elegant, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration, art by artgerm and greg rutkowski and alphonse mucha, 8 k.",
  "ultra realistic illustration, {INSTANCE_PROMPT} {CLASS_PROMPT}, highly detailed, digital painting, artstation, concept art, sharp focus, illustration, art by artgerm and greg rutkowski and alphonse mucha",
  "baroque oil painting character headshot portrait concept art, realism key visual of {INSTANCE_PROMPT} {CLASS_PROMPT}, oily coveralls, holding spanner, studio soft light directed, gaze finely detailed , trending on pixiv fanbox, painted by greg rutkowski",
  "a portrait of {INSTANCE_PROMPT} {CLASS_PROMPT}, fantasy, sharp focus, intricate, elegant, digital painting, artstation, matte, highly detailed, concept art, illustration, ambient lighting, art by ilya kuvshinov, artgerm, alphonse mucha, and greg rutkowski",
  "A photograph portrait of  {INSTANCE_PROMPT} {CLASS_PROMPT} wearing late 1960s menswear and glasses in the late 1960s, taken in the early 1960s, grainy, taken on a 1960s Kodak Camera, realistic, hyperrealistic, very realistic, highly detailed, very detailed, extremely detailed, detailed, digital art, trending on artstation, colorized photo",
  "{INSTANCE_PROMPT} {CLASS_PROMPT} as a Paladin, portrait, intricate, elegant, volumetric lighting, scenery, digital painting, highly detailed, artstation, sharp focus, illustration, concept art, ruan jia, steve mccurry.",
  "portrait of {INSTANCE_PROMPT} {CLASS_PROMPT} in ornate armor, by ilya kuvshinov, by thomas lawrence, by bayard wu, trending on artstation, masterpiece",
  "portrait of {INSTANCE_PROMPT} {CLASS_PROMPT}, victorian, concept art, detailed face, fantasy, close up face, highly detailed, cinematic lighting, digital art painting by greg rutkowski",
  "portrait of {INSTANCE_PROMPT} {CLASS_PROMPT} with medieval armour painting by gaston bussiere, greg rutkowski, yoji shinkawa, yoshitaka amano, tsutomu nihei, donato giancola, tim hildebrandt, oil on canvas, trending on artstation, featured on pixiv, cinematic composition, extreme detail",
  "A portrait of {INSTANCE_PROMPT} {CLASS_PROMPT} as a cowboy, intricate, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration, cinematic, vfx",
  "a _ fantasy _ style _ portrait _ painting _ of {INSTANCE_PROMPT} {CLASS_PROMPT} oil _ painting _ unreal _ 5 _ daz. _ rpg _ portrait _ extremely _ detailed _ artgerm _ greg _ rutkowski _ greg",
  "a portrait of {INSTANCE_PROMPT} {CLASS_PROMPT}, fantasy, sharp focus, intricate, elegant, digital painting, artstation, matte, highly detailed, concept art, illustration, ambient lighting, art by ilya kuvshinov, artgerm, alphonse mucha, and greg rutkowski",
  "symmetry!! portrait of {INSTANCE_PROMPT} {CLASS_PROMPT} with snake hair, gothic, dark, intricate, elegant, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration, art by artgerm and greg rutkowski and alphonse mucha",
  "a portrait of {INSTANCE_PROMPT} {CLASS_PROMPT}, fine details. night setting. realistic shaded lighting poster by craig mullism, artgerm, jeremy lipkin and michael garmash, unreal engine, radiant light, detailed and intricate environment, digital art, trending on art station",
].map((v, ix) => ({ id: ix, rawText: v }));

export default prompts;
