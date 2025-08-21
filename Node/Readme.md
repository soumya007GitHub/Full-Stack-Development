dependency in package.json means the package which are being used by the node project. 
devDependency means the packages which are used as dependent while node project is in development mode.

4.1.0
Here 4 - Major change
     1 - Minor Change
     0 - Patch Change

package-lock.json file keep tracks of what has been already installed as dependency in the node project.

Here we can see after installing any node package the version is written as 
"date-fns": "^4.1.0"
The ^ means whenever there is any change in minor or patch version change it, without changing to the major version of the package.