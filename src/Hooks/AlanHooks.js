import { useEffect, useState, useCallback} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';


const  COMMANDS ={
    OPEN_PROJECTS: 'open projects'
}


export default  function AlanHooks() {

    const [alanInstance, setAlanInstance] = useState();

    const openProjects = useCallback(() => {
        alanInstance.playText("wich project would you like open? say a number")
    }, [alanInstance])

    useEffect(() => {
        window.addEventListener(COMMANDS.OPEN_PROJECTS, openProjects)

        return () => {
            window.removeEventListener(COMMANDS.OPEN_PROJECTS, openProjects)
        }
    },[openProjects]);

    useEffect(() =>{
        if(alanInstance != null) return

        setAlanInstance(
            alanBtn({

            key: process.env.REACT_APP_ALAN_KEY,
            onCommand: ({ command}) => {
               window.dispatchEvent(new CustomEvent(command))
            }
        }) 
        )
    }, [alanInstance])

    return null 
}


