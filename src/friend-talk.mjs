// All conversation is written here and stays on this device.
const named=(game,id)=>game.byId[id]?.name;
const clothingKeys=['dress','top','bottom','shoes'];

export function outfitNotice(before,after,game){
  if(!before||!after)return null;
  if(before.extras.pet?.id!==after.extras.pet?.id&&after.extras.pet)return `Aww! ${named(game,after.extras.pet.id)} is such a cute runway buddy!`;
  if(before.hair!==after.hair)return `You tried ${named(game,after.hair)}! Your new hairstyle is so fun!`;
  if(before.hairColor!==after.hairColor){const color=game.HAIR_COLORS.find(c=>c.hex===after.hairColor)?.name;return `${color||'A new color'} hair! What a lovely idea!`;}
  if(before.makeup!==after.makeup||before.makeupColor!==after.makeupColor)return after.makeup==='fresh-face'?'A fresh face and a fresh idea! What will you try next?':`Ooh, ${named(game,after.makeup)}! Your new face paint is so creative!`;
  for(const key of clothingKeys){
    if(before[key]?.id!==after[key]?.id&&after[key])return `You changed into ${named(game,after[key].id)}! That is such a cute choice!`;
    if(before[key]?.color!==after[key]?.color&&after[key]){const color=game.COLORS.find(c=>c.hex===after[key].color)?.name;return `I noticed your new ${color?.toLowerCase()||'outfit'} color. Lovely styling!`;}
  }
  for(const slot of['ears','wrist','neck','head','bag','back','pet']){
    const piece=after.extras[slot],previous=before.extras[slot];
    if(piece?.id!==previous?.id&&piece)return `You added ${named(game,piece.id)}! Such a lovely finishing touch!`;
    if(piece?.color!==previous?.color&&piece)return `A new color for ${named(game,piece.id)}! I love trying new combinations too!`;
    if(previous&&!piece)return 'Mixing things up! I like seeing your new outfit ideas.';
  }
  return null;
}

export function friendlyGreeting(outfit,game,turn=0){
  const look=named(game,outfit.dress?.id||outfit.top?.id),hair=named(game,outfit.hair),pet=named(game,outfit.extras.pet?.id);
  const messages=[
    pet?`Hi! ${pet} looks ready for a little fashion adventure!`:`Hi! Your ${look} is so cute!`,
    `I like your ${hair} hairstyle! Want to strike a pose together?`,
    'Have you visited BOO-tique? The little pumpkin outfits make me smile!',
    'You are invited to the VIP lounge too. Let’s try something sparkly!',
    'Picking colors is my favorite part. What a fun day at the mall!',
    `That ${look} would be lovely on the runway. I’ll cheer for you!`
  ];
  return messages[((turn%messages.length)+messages.length)%messages.length];
}
