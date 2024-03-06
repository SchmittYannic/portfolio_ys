const styles = {
    grid: "grid gap-x-[24px] grid-cols-12 items-center",
    gridTablet: "grid gap-x-[24px] grid-cols-8 items-center",


    heroImgSection:
        "lg:max-w-[50%] lg:min-h-[100%] md:min-h-[500px] sm:min-h-[400px] min-h-[300px]",
    heroImg:
        "lg:w-[700px] lg:h-[700px]",
        // "lg:w-full lg:max-w-none sm:max-w-[300px] max-w-[215px]",

    heroImgWidth: 
        "2xl:w-[500px] xl:w-[450px] sm:w-[300px] w-[250px]",
    heroImgHeight:
        "2xl:h-[500px] xl:h-[450px] sm:h-[300px] w-[250px]",

    heroTextSection: 
        "4xl:max-w-[700px] 2xl:max-w-[600px] lg:max-w-[500px] md:max-w-[500px] sm:max-w-[400px] max-w-[360px]",
    heroTextSectionPadding:
        "lg:py-0 md:py-24 sm:py-16 py-10 lg:mx-auto lg:pl-20 lg:pr-0 px-10",
    heroHeadText:
        "4xl:text-7xl 2xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold",
    heroSubText:
        "4xl:text-[25px] 2xl:text-[22px] md:text-[20px] sm:text-[18px]",

    projectDisplayWidth:
        "3xl:w-[1024px] 2xl:w-[896px] xl:w-[768px]",
    projectDisplayImgHeight:
        "3xl:h-[576px] 2xl:h-[504px] xl:h-[432px]",
    projectsSelectionWidth:
        "2xl:w-[450px] xl:w-[300px]",
}

const heroStyles = {
    heroTextPosition: "2xl:col-start-3 col-start-2 2xl:col-span-4 col-span-5 col-span-6",
    heroImgPosition: "2xl:col-end-11 col-end-12 col-span-4", //2xl:col-span-4 col-span-5
    heroImgWidth: "2xl:w-[462px] xl:w-[410px] w-[320px]",
    heroImgHeight: "2xl:h-[462px] xl:h-[410px] h-[320px]", //410 //350
    heroHeadText: "3xl:text-7xl 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-5xl",
    heroSubText: "3xl:text-[25px] 2xl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[20px]",
    heroSubTextMaxWidth: "3xl:max-w-[580px] xl:max-w-[500px] max-w-[460px]", //2xl
}

const projectsStyles = {
    projectDisplayWidth: "4xl:w-[1024px] 2xl:w-[896px] xl:w-[768px] w-[640px]",
    projectDisplayImgHeight: "4xl:h-[576px] 2xl:h-[504px] xl:h-[432px] h-[360px]",
    projectsSelectionWidth: "3xl:w-[450px] 2xl:w-[360px] xl:w-[260px] w-[180px]", //xl
}

export {
    styles,
    heroStyles,
    projectsStyles,
}