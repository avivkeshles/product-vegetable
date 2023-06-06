class Config {
    public bicyclesUrl = ""
    public bicyclesTypesUrl =""
    
}

class DevelopmentConfig extends Config {
    public productsUrl = "https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/"
   
  
}

class ProductionConfig extends Config {
    public productsUrl = "https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/"
   
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
