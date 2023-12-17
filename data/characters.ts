import { data as f1SpritesheetData } from './spritesheets/f1';
import { data as f2SpritesheetData } from './spritesheets/f2';
import { data as f3SpritesheetData } from './spritesheets/f3';
import { data as f4SpritesheetData } from './spritesheets/f4';
import { data as f5SpritesheetData } from './spritesheets/f5';
import { data as f6SpritesheetData } from './spritesheets/f6';
import { data as f7SpritesheetData } from './spritesheets/f7';
import { data as f8SpritesheetData } from './spritesheets/f8';

export const Descriptions = [
  {
    name: 'Shivani',
    character: 'f5',
    identity: `A talented violinist with long, 
    flowing red hair. She's often seen wearing elegant dresses and 
    has a serene, focused demeanor`,
    plan: 'You want to find love.',
  },
  {
    name: 'Max',
    character: 'f1',
    identity: `A tech-savvy gamer with short, 
    spiky hair and glasses. He's usually in casual attire, 
    like hoodies and jeans, with a playful and competitive spiritr.`,
    plan: 'You want to hear all the gossip.',
  },
  {
    name: 'Nandini',
    character: 'f4',
    identity: ` A skilled baker known for her creative pastries. 
    She has curly brunette hair, often tied up with a bandana, 
    and her apron is her signature outfit`,
    plan: 'You want to avoid people as much as possible.',
  },
  {
    name: 'Helly',
    character: 'f6',
    identity: `An adventurous photographer with rugged looks, 
    and tousled hair. Her attire includes cargo pants and a camera always around her necke.`,
    plan: 'You want to take advantage of others as much as possible.',
  },
  {
    name: 'Jake',
    character: 'f2',
    identity: `A fitness trainer with a muscular build and short, 
    buzz-cut hair. He's usually seen in athletic wear, 
    radiating energy and motivation`,
    plan: 'You want to spread knowledge.',
  },
  {
    name: 'Vignita',
    character: 'f3',
    identity: `An aspiring astrologer with mysterious, 
    deep eyes and long black hair. She loves wearing star-themed 
    accessories and often has an ethereal presence`,
    plan: 'You want to figure out how the world works.',
  },
  {
    name: 'Monisha',
    character: 'f7',
    identity: `Monisha is a young, dynamic software engineer. She has long, wavy black hair and a thoughtful expression, often seen wearing smart casual attire, like a blazer and jeans, complementing her professional yet approachable demeanor`,
    plan: 'You want to convert everyone to your religion.',
  },
  {
    name: 'Shreyas',
    character: 'f8',
    identity: `An ambitious corporate lawyer. 
    She has short, stylish hair and is usually seen in sharp, 
    formal suits. His piercing gaze and confident posture reflect 
    his assertiveness and professionalism.`,
    plan: 'You want find a way to be happy.',
  },
];

export const characters = [
  {
    name: 'f1',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f1SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f2',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f2SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f3',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f3SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f4',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f4SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f5',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f5SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f6',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f6SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f7',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f7SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f8',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f8SpritesheetData,
    speed: 0.1,
  },
];

// Characters move at 0.75 tiles per second.
export const movementSpeed = 0.75;
