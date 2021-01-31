export  const updateObjectArry = (items, itemid, objPropName, newObjProps) => {
   return  items.map(u => {
        if (u[objPropName] === itemid) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}