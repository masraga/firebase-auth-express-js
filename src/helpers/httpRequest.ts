import axios, { AxiosResponse } from "axios"

export type IHttp = {
  method: string,
  url: string,
  payload ?: any,
  headers ?: any
}

type IHttpConfig = {
  method: string,
  url: string,
  params?: any,
  data?: any
  headers ?: any
}

const httpRequest = async (req: IHttp) => {
  try {
    axios.interceptors.response.use((res: AxiosResponse<any, any>)=> {
      return res
    }, (error: any)=> {
      return Promise.reject(error)
    })
    let config: IHttpConfig = {
      method: req.method,
      url: req.url,
      headers: {},
    }
    if(typeof req.headers != "undefined"){
      config.headers = {...config.headers, ...req.headers}
    }
    if(config.method == "get"){
      config.params = req.payload
    }
    else {
      config.data = req.payload
    }

    return await axios(config)
  }
  catch(e) {
    throw e
  }
}

export default httpRequest