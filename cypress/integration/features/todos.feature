# language: fr

Fonctionnalité: Lister mes tâches

  J'ai besoin de voir ma liste de tâche quand je lance l'application

  Contexte:
    Étant donné que je n'ai aucune tâche
    Et que j'ouvre l'app

  Scénario: j'ouvre l'app pour voir mes tâches
    Étant donné que j'ai des tâches
    Alors je devrais voir ma liste de tâches

  Scénario: je n'ai aucune tâches
    Alors je devrais voir une liste vide

  Scénario: j'ai plusieurs tâches
    Étant donné que ces tâches existent
      | name  | id | isComplete |
      | One   | 1  | false      |
      | Two   | 2  | true       |
      | Three | 3  | false      |
      | Four  | 4  | true       |
    Alors je devrais voir toutes mes tâches

  Scénario: j'ajoute une tâche spécifique
    Quand je rempli le champ avec
      """
        New Todo
        avec du texte sur plusieurs
      """

  Plan du scénario: j'ajoute une tâche
    Quand j'ajoute une tâche nommée "<name>"
    Alors la tâche "<name>" est ajoutée à la liste

  Plan du scénario: je termine une tâche
    Étant donné que j'ajoute une tâche nommée "<name>"
    Quand je termine la tâche nommée "<name>"
    Alors la tâche nommée "<name>" est terminée

  Exemples:
    | name  |
    | One   |
    | Two   |
    | Three |
    | Four  |
