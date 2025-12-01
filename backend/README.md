配置IDEA：
[settings/Build/Build Tools/Maven]
Maven home path: D:\Programs\maven
User setting file: D:\Programs\maven\conf\settings.xml
Local repository: D:\Programs\maven\tfzhao_repo
settings/Build/Build Tools/Maven/Runner: JDK17

确保项目的 Java 编译器设置为 7 或更高版本：
在 File -> Project Structure -> Modules -> Language Level 中选择 7 或更高版本。
确保 File -> Settings -> Build, Execution, Deployment -> Compiler -> Java Compiler 中指定的字节码版本为 7 或更高。

[project structure]
project settings: SDK:17, languageLevel:17
    Modules: languageLevel:17
PlatformSettings: SDK:17


初始化
spring init --dependencies=web,postgresql --java-version=17 --build=maven taskhub

./mvnw clean package
./mvnw spring-boot:start  

