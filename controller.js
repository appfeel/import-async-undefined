// If I remove this import (doesn't matter which file and what it does)
// then all works fine (see controller1.js)
import global from './global';

export async function myFunc1(req, res, next) {
}

export const myFunc2 = async (req, res, next) => {
};
