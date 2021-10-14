package conf

import (
	"github.com/spf13/viper"
)

// AppConfig function
type AppConfig struct {
	GINMode  string `mapstructure:"GIN_MODE"`
	ADDRESS  string `mapstructure:"ADDRESS"`
	MongoURI string `mapstructure:"MONGO_URI"`
	DataBase string `mapstructure:"DATABASE"`
	CF_ADDR  string `mapstructure:"CF_ADDR"`
	CF_KEY   string `mapstructure:"CF_KEY"`
}

// Load function
func Load() (conf *AppConfig, err error) {
	conf = new(AppConfig)

	viper.SetDefault("GIN_MODE", "release")
	viper.SetDefault("ADDRESS", "127.0.0.1:8080")
	viper.SetDefault("MONGO_URI", "mongodb://127.0.0.1:27017/?maxPoolSize=20&w=majority")
	viper.SetDefault("DATABASE", "polyus")
	viper.SetDefault("CF_ADDR", "http://localhost:8282/wss/api")
	viper.SetDefault("CF_KEY", "21be951f-5700-4298-806a-01e29997060f")

	viper.SetConfigFile("./conf/config.env")
	viper.AutomaticEnv()

	err = viper.ReadInConfig()
	if err != nil {
		return
	}

	err = viper.Unmarshal(conf)
	return
}
