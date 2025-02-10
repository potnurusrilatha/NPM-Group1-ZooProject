!!! CREATE A NEW FEATURE BRANCH FROM MAIN !!!
Git checkout MAIN
Git pull
Git checkout -b (New branch-name)


!!! FROM YOUR NEW BRANCH - ADD YOUR CODE !!!
Git push setup origin (branch-name)
Git add .
Git commit -m ""
Git push


!!! MERGE (branch) INTO DEVELOP !!!
Git checkout develop
Git pull
Git merge (branch-name)


!!! AFTER SOLVING THE CONFLICTS IN DEVELOP !!!
Git add .
Git commit -m ""
Git push


!!! CHECKOUT TO MAIN FOR UPDATES !!!
Git checkout main
Git pull


!!! MERGE MAIN IN TO YOUR BRANCH BEFORE MERGING YOUR BRANCH INTO MAIN - FIX CONTLICTS !!!
Git checkout (branch-name)
Git merge main


!!! MERGE YOUR BRANCH IN TO MAIN FOR PRODUCTION !!!
Git checkout main
Git merge (branch-name)
Git add .
Git commit -m
GIT PUSH!!!
