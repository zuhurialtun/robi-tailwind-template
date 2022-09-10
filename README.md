# ROBI Tailwind Admin Template
---

## Get started with Tailwind CSS
* We use Tailwind CLI
- The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.
---
**1. Install Tailwind CSS**
Install tailwindcss via npm, and create your tailwind.config.js file.
>**Terminal**
```
npm install -D tailwindcss
npx tailwindcss init
```
**2. Configure your template paths**
Add the paths to all of your template files in your tailwind.config.js file.
>**tailwind.config.js**
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
**3. Add the Tailwind directives to your CSS**
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
>**src/input.css**
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
**4. Start the Tailwind CLI build process**
Run the CLI tool to scan your template files for classes and build your CSS.
>**Terminal**
```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```
**5. Start using Tailwind in your HTML**
Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.
>**src/index.html**
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

## Türkçe Kurulum
**1. Gerekli Dosyalar**
Bulunduğumuz dizine eğer yok ise src klasörü ve public klasörü oluşturuyoruz. Sonrasında **“src”** klasörü altına bir **“styles.css”** dosyası, **“public”** klasörü altına ise bir tane **“index.html”** ve bir adet de **"style.css"** dosyası oluşturalım.

**2. Terminal Ekranından İlk Komutumuzu Çalıştıralım**

![Open Terminal](https://www.belgeci.com/wp-content/uploads/2022/04/terminal-acilisi-234x300.jpg)

Yukarıdaki menuden Terminal’e tıklıyoruz sonra **New Terminal** dediğimizde ekranın altında bir terminal alanı açılıyor. Oraya gerekli komutumuzu yazıyoruz.
```
npm init -y
```
ve enter a basıyoruz. Bunu yaptıgımızda projemize bir tane **package.json** dosyası eklendiğini göreceğiz. Bu komutu, bir nevi, bu projede npm kullanarak birşeyler yapacağız dercesine bir aktifleştirme komutu gibi düşünebilirsiniz.

**3. NPM ile Tailwind’i İndiriyoruz**

![File List](http://www.belgeci.com/wp-content/uploads/2022/04/npm-tamam.jpg)

```
npm i -D tailwindcss
```
Belirtilen komutu çalıştırıyoruz. Kod eğer düzgün çalıştıysa, sol taraftaki dosya listemizin artık yukarıdaki gibi gözükmesi lazım yani, **node_modules**‘un gelmiş olması lazım.

**4. Tailwindcss.config.js Dosyasında Content kısmını tamımlıyoruz**

![Tailwindcss.config](https://www.belgeci.com/wp-content/uploads/2022/04/tailwind-config-1.jpg)

**Content** kısmının içerisine çift tırnak içerisinde, tailwind’in hangi dosyaların içerisindeki class isimlerine bakarak css dosyasını oluşturacağını belirliyoruz. Burada *.* gibi ibareler kullanarak bir klasor altındaki tüm html dosyalarına bak şeklinde ifadeler kullanabiliriz. Ancak bizim senaryomuzda şuan sadece index html kullanıldığı için onun direkt adını yazmak yeterli.

> ***Bu projede config içeriği girilmiştir. Eğer gözükmüyor ise aşağıda belirttiğim gibi düzeltebilirsiniz.***
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**5. Tailwind’in hangi kısımlarını kullanacağımızı belirtiyoruz**
```
Bunun için 1. adımda oluşturduğumuz styles.css dosyası içerisine;

@tailwind base;
@tailwind components;
@tailwind utilities;

yazıp ana dizine kaydediyoruz.
```
**6. Tailwind CSS’imizi Oluşturalım ve Başlatalım**
```
npx tailwindcss -i ./styles.css -o ./public/style.css --watch
```
Belirtilen kodu yazarak bizim için public klasoru içerisine anlık olarak ihtiyacımız kadar olanı dahil edecek bir css dosyası oluşturmasını sağlıyoruz.

**7. Oluşan CSS Dosyasını html sayfalarının içerisinde refere ediyoruz**

![style.css](https://www.belgeci.com/wp-content/uploads/2022/04/tailwind-index-e-ekle-1.jpg)

```
<link href="style.css" rel="stylesheet">
```
Belirtilen HTML kodunu kullanmak istediğimiz sayfalarda head etiketi içerisine ekliyoruz.

## Authors
* **Zuhuri Altun** - [zuhurialtun](https://github.com/zuhurialtun)
## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
## References
> [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation)
> [tailwind-css-kurulum](https://www.belgeci.com/tailwind-css-kurulum.html)
> [Login Page](https://larainfo.com/blogs/tailwind-css-simple-login-form-example)