import { Container } from 'inversify';
import { Inj, TYPES } from './testing';
import { Test } from './example';
// import { TYPES } from "./types";
// import { Warrior, Weapon, ThrowableWeapon } from "./interfaces";
// import { Ninja, Katana, Shuriken } from "./entities";

const myContainer = new Container();
myContainer.bind<Test>(TYPES.Test).to(Test);
myContainer.bind<Inj>(TYPES.Inj).to(Inj);

export { myContainer };
