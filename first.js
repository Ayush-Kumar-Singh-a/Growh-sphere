const taski=document.getElementById('task')

const addTask=document.getElementById('tasklist')
const btn=document.getElementById('btn')

btn.addEventListener('click',()=>{
    const tasktext=taski.value
    if(tasktext.trim()!==''){
        const newtask=document.createElement('li')
        newtask.textContent=tasktext
        


        const del=document.createElement('btn')
        del.textContent='delete'
        del.addEventListener('click',()=>{
            addTask.removeChild(newtask)
        })
        newtask.appendChild(del)
        addTask.appendChild(newtask)
        taski.value=''
    }
})