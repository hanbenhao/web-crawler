import axios, { AxiosInstance } from 'axios'

/**
 * 请求器基础类
 */
class Request {
  instance: AxiosInstance

  constructor(config) {
    // 创建axios实例
    this.instance = axios.create({
      baseURL: config?.baseURL || '',
      timeout: config?.timeout || 10000,
      headers: config?.headers || {
        'Content-Type': 'application/json;charset=utf-8',
      },
      ...config,
    })

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 在发送请求之前做些什么
        // 例如添加token
        const token = localStorage.getItem('token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        // 对请求错误做些什么
        return Promise.reject(error)
      }
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        // 对响应数据做点什么
        const res = response.data

        // 根据自定义错误码判断请求是否成功
        if (res.code && res.code !== 200) {
          // 处理错误
          console.error(res.message || '请求失败')

          // 401: 未登录或token过期
          if (res.code === 401) {
            // 可以在这里处理登出逻辑
            console.warn('登录状态已过期，请重新登录')
          }

          return Promise.reject(new Error(res.message || '请求失败'))
        }

        return res
      },
      (error) => {
        // 对响应错误做点什么
        console.error(`请求错误: ${error}`)
        return Promise.reject(error)
      }
    )
  }

  /**
   * GET请求
   * @param {string} url - 请求地址
   * @param {object} params - 请求参数
   * @param {object} config - 请求配置
   * @returns {Promise} - 返回Promise对象
   */
  get(url, params = {}, config = {}) {
    return this.instance.get(url, { params, ...config })
  }

  /**
   * POST请求
   * @param {string} url - 请求地址
   * @param {object} data - 请求数据
   * @param {object} config - 请求配置
   * @returns {Promise} - 返回Promise对象
   */
  post(url, data = {}, config = {}) {
    return this.instance.post(url, data, config)
  }

  /**
   * PUT请求
   * @param {string} url - 请求地址
   * @param {object} data - 请求数据
   * @param {object} config - 请求配置
   * @returns {Promise} - 返回Promise对象
   */
  put(url, data = {}, config = {}) {
    return this.instance.put(url, data, config)
  }

  /**
   * DELETE请求
   * @param {string} url - 请求地址
   * @param {object} params - 请求参数
   * @param {object} config - 请求配置
   * @returns {Promise} - 返回Promise对象
   */
  delete(url, params = {}, config = {}) {
    return this.instance.delete(url, { params, ...config })
  }

  /**
   * 上传文件
   * @param {string} url - 请求地址
   * @param {FormData} formData - 表单数据
   * @param {object} config - 请求配置
   * @returns {Promise} - 返回Promise对象
   */
  upload(url, formData, config = {}) {
    return this.instance.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      ...config,
    })
  }

  /**
   * 下载文件
   * @param {string} url - 请求地址
   * @param {object} params - 请求参数
   * @param {object} config - 请求配置
   * @returns {Promise} - 返回Promise对象
   */
  download(url, params = {}, config = {}) {
    return this.instance.get(url, {
      params,
      responseType: 'blob',
      ...config,
    })
  }
}

export default new Request({
  baseURL: 'localhost:3000',
})
