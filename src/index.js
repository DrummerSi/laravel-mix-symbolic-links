const mix = require("laravel-mix")
const colors = require("colors")
const fs = require("fs")
const isSymbolicLink = require("is-symbolic-link")
const resolve = require("path").resolve


class SymbolicFolder {
    register(path, target) {
		
		target = resolve(target)
        
		if(!fs.existsSync(path)){		
			//We know path doesn't exist. Attempt creating the symbolic link
			
			try {
				fs.symlinkSync( target, path, "dir" )
				if(fs.statSync(path).isDirectory()){
					//Success
					console.log(`> Symbolic link at '${path}' created successfully`.bold.green)

				} else {
					//Fail
					console.log(`> The symbolic link at '${path}' failed to be created correctly`.bold.red)
                    console.log(` > You may require additional priviledges to continue`.bold.red)
                    process.exit()
				}
				
			} catch(err){
				//Error
				console.log(`> The symbolic link at '${path}' failed to be created correctly \n\n ${err}`.bold.red)
                console.log(` > You may require additional priviledges to continue`.bold.red)
                process.exit()
			}
			
		} else {
			//If the existing file is NOT a symbolic link, alert the user
			if(!isSymbolicLink.sync(path)){
				console.log(`> The symbolic link at '${path}' could not be created. Another file with this name already exists`.bold.red)
                process.exit()
			}
			//Else, it's a symbolic link... do nothing
			
		}
    }
}
//NOP

class SymbolicFile {
    register(path, target) {
		
		target = resolve(target)
        
		if(!fs.existsSync(path)){		
			//We know path doesn't exist. Attempt creating the symbolic link
			
			try {
				fs.symlinkSync( target, path )
				if(fs.statSync(path).isFile()){
					//Success
					console.log(`> Symbolic link at '${path}' created successfully`.bold.green)

				} else {
					//Fail
					console.log(`> The symbolic link at '${path}' failed to be created correctly`.bold.red)
				}
				
			} catch(err){
				//Error
				console.log(`> The symbolic link at '${path}' failed to be created correctly \n\n ${err}`.bold.red)
			}
			
		} else {
			//If the existing file is NOT a symbolic link, alert the user
			if(!isSymbolicLink.sync(path)){
				console.log(`> The symbolic link at '${path}' could not be created. Another file with this name already exists`.bold.red)
			}
			//Else, it's a symbolic link... do nothing
			
		}
    }
}


mix.extend("createSymbolicFolder", new SymbolicFolder());
mix.extend("createSymbolicFile", new SymbolicFile());
