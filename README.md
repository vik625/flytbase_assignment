-----------------------------------
STEPS TO RUN MOVING BOX REACT WEBSITE ON YOUR WEB BROWSER
-----------------------------------

---------
LINUX
---------
  
  _________
  TERMINAL
  _________
 
    These are the one time installation process
 	# git clone http://github.com/vik625/flytbase_assignment
 	# cd flytbase_assignment
 	# npm install

    Run this command to start the React.js server.
	# npm start

	Now the local server will start within minutes on Port 3000. Run `npm install` only for the first time.
  
  ____________
  WEB BROWSER
  ____________

	 PASTE IN THE URL BAR: http://localhost:3000   OR   <your_ip_address>:3000

---------
WINDOWS
---------

   _________
   GIT BASH
   _________
   
   	 REACH AT YOUR DIRECTORY WHERE YOU WANT TO CLONE movingBox USING GIT BASH THEN FOLLOW THE SAME PROCESSOR AS IN TERMINAL
	 (Note: Run GIT BASH As Admin).

Important Components and Functions
---

1. BoxAssignment.component.js - It is main component of our react application. It contains almost all the functions which are working in this project. These are -
	
	a) addBox() - This function adds a new box to the box holder division. It first generates the new ID for the box (by incrementing the previous ID), and appends a <MovingBox /> component to the state variable array named boxes[].
	
	b) setTarget() - This function sets the box on which keyboard actions will be performed. And implements the "keydown" event listeners for moving boxes.
	
	c) deleteBox(id) - This function is used to delete a box with the ID provided in the argument. It basically removes the component from the state variable array boxes[].
	
	d) toggleAllListeners() - This is used to toggle event listeners between blocking and working state. Active toggle implies all event listeners are active and vice-versa.

2. movingBox.component.js - This is the component for the box. It contains designs and structure of every box.
