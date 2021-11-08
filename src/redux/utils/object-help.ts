

export const updateObjectInArray = (item: any, itemId: any, objectPropName: any, newObjProps: any) => 
{ return  item.map(( u: any) => {
        if (u[objectPropName] === itemId)  {
        return {...u, ...newObjProps}
        }
        return u
     })
  }