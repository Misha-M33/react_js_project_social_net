import { instance, APIResponseType } from "./api"
import { profileType, photosType } from "../type/type"

type savePhotoResponseDataType={
  photos: photosType
}

export const profileAPI = { 
  getProfile (userId: number) {
    return  instance.get<profileType> (`profile/` + userId ).then(res=> res.data)
        },
        getStatus(userId: number) {
          return instance.get<string> (`profile/status/` + userId ).then(res=> res.data)
        },
        updateStatus(status: string) {
          return instance.put<APIResponseType> (`profile/status`, {status: status}).then(res=> res.data)
        },
        savePhoto(photoFile: any) {
          const formData= new FormData()
          formData.append( "image", photoFile)
          return instance.put<APIResponseType<savePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: { 'Content-Type': 'multipart/form-data'  }
          } ).then(res=> res.data)
        },
        saveProfile(profile: profileType) {
          return instance.put<APIResponseType> (`profile`, profile ).then(res=> res.data)
        }
      }