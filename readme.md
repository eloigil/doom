# DOOM

## Description
This is a project done just for fun and to experiment a bit with HTML5 canvas and ES6 OOP. It's based on the original Doom videogame and it's main challenge will be recreating 3 dimensions in a 2D environment.

[Give it a look!](https://eloigil.github.io/doom/)

## CLASSES

- ### CORE

  The core of the game involves the main class and the classes that control the logics of the game.

  - #### GAME
    The *Game* class is the responsible of the game generation and passes all the references to the different classes that control the logics.

  - #### TIME
    The *Time* class creates an interval that is the responsible of the game logics updates.

- ### EVENT HANDLERS

  Event handlers are the responsible of the event tracking.

  - #### KEY HENDLER
    the *KeyHandler* tracks all the key events

- ### VIEW ENGINE

  The view engine are all the tools that make the game to be displayed.

  - #### RENDER ENGINE
    the *RenderEngine* class is the responsible of rendering each element of the game tracked by the camera rays in the provided context.
  
  - #### CAMERA
    the *Camera* class is the responsible of tracking by Ray Tracing the elements that should be rendered by the RenderEngine.
  
  - #### RAY
    the *Camera* class is the responsible of getting the distance between the camera and the game objects.

- ### GAME OBJECTS

  Game objects are the elements involved in the game that user can interact with.

  - #### PLAYER
    the *Player* class generates a player, an avatar that user can control and move around the scene.
  
  - #### ENVIROMENT BOX
    the *EnvironmentBox* class generate all the environment basic elements.

