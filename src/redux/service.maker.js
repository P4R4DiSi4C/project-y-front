import instance from '../axios';

export default (Routes) => {
  const funcs = {};
  for (const func in Routes) {
    funcs[func] = (...args) => {
      return instance(Routes[func](...args));
    };
  }
  return funcs;
};

/*
// créer un objet vide
const funcs = {};

// cette boucle for permet de looper toutes les keys dans appointment.routes
for (const func in Routes) {
  // je rempli le tableau funcs
  // par exemple pour la fonction add ->
  // je créer func.add
  // puis je met dedans une fonction qui prend n'importe quel argument et qui retourne une instance
  // et dans cette instance je call la fonction qui est à la clé add ->    return instance(Routes.add(...args))
  // c'est une façon plus facile d'écrire mais avec la manière que j'ai utiliser je peux utiliser les variables pour chercher une clé
  funcs[func] = (...args) => {
    return instance(Routes[func](...args));
  };
}

// je retourne l'objet avec toutes les fonctions qu'on a ajouté
export default funcs;


// C'est, magnifique, bravo.*/