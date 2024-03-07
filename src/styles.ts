// const styles = {
//     grid: "grid grid-cols-12 items-center",
//     gridTablet: "grid grid-cols-8 items-center",


//     heroImgSection:
//         "lg:max-w-[50%] lg:min-h-[100%] md:min-h-[500px] sm:min-h-[400px] min-h-[300px]",
//     heroImg:
//         "lg:w-[700px] lg:h-[700px]",
//         // "lg:w-full lg:max-w-none sm:max-w-[300px] max-w-[215px]",

//     heroImgWidth: 
//         "2xl:w-[500px] xl:w-[450px] sm:w-[300px] w-[250px]",
//     heroImgHeight:
//         "2xl:h-[500px] xl:h-[450px] sm:h-[300px] w-[250px]",

//     heroTextSection: 
//         "4xl:max-w-[700px] 2xl:max-w-[600px] lg:max-w-[500px] md:max-w-[500px] sm:max-w-[400px] max-w-[360px]",
//     heroTextSectionPadding:
//         "lg:py-0 md:py-24 sm:py-16 py-10 lg:mx-auto lg:pl-20 lg:pr-0 px-10",
//     heroHeadText:
//         "4xl:text-7xl 2xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold",
//     heroSubText:
//         "4xl:text-[25px] 2xl:text-[22px] md:text-[20px] sm:text-[18px]",

//     projectDisplayWidth:
//         "3xl:w-[1024px] 2xl:w-[896px] xl:w-[768px]",
//     projectDisplayImgHeight:
//         "3xl:h-[576px] 2xl:h-[504px] xl:h-[432px]",
//     projectsSelectionWidth:
//         "2xl:w-[450px] xl:w-[300px]",
// }

// const heroStyles = {
//     heroTextPosition: "2xl:col-start-3 col-start-2 2xl:col-span-4 col-span-5 col-span-6",
//     heroImgPosition: "2xl:col-end-11 col-end-12 col-span-4", //2xl:col-span-4 col-span-5
//     heroImgWidth: "2xl:w-[462px] xl:w-[410px] w-[320px]",
//     heroImgHeight: "2xl:h-[462px] xl:h-[410px] h-[320px]", //410 //350
//     heroHeadText: "3xl:text-7xl 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-5xl",
//     heroSubText: "3xl:text-[25px] 2xl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[20px]",
//     heroSubTextMaxWidth: "3xl:max-w-[580px] xl:max-w-[500px] max-w-[460px]", //2xl
// }

// const projectsStyles = {
//     projectDisplayWidth: "4xl:w-[1024px] 2xl:w-[896px] xl:w-[768px] w-[640px]",
//     projectDisplayImgHeight: "4xl:h-[576px] 2xl:h-[504px] xl:h-[432px] h-[360px]",
//     projectsSelectionWidth: "3xl:w-[450px] 2xl:w-[360px] xl:w-[260px] w-[180px]", //xl
// }

const styles = {
    maxContainer: 
        "4xl:max-w-[1920px] 3xl:max-w-[1728px] 2xl:max-w-[1536px] xl:max-w-[1280px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] xs:max-w-[450px] min-w-[320px] mx-auto 3xl:px-36 md:px-24 sm:px-12 px-4",
    sectionPaddingBottom: "pb-32", 
}

const heroStyles = {
    heroPaddingTop: "xl:pt-0 md:pt-48 pt-36",
    heroPaddingBottom: "xl:pb-0 md:pb-[122px] pb-[74px]", // difference between Top and Bottom is the height of the navbar in px
    heroImgTextGap: "xl:gap-0 md:gap-32 sm:gap-24 xs:gap-20 gap-16",
    heroImgWidth: "2xl:w-[500px] xl:w-[400px] lg:w-[400px] md:w-[320px] sm:w-[280px] xs:w-[200px] w-[160px]",
    heroImgHeight: "2xl:h-[500px] xl:h-[400px] lg:h-[400px] md:h-[320px] sm:h-[280px] xs:h-[200px] h-[160px]",
    heroHeadText: "2xl:text-7xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-4xl text-3xl",
    heroSubText: "2xl:text-[25px] xl:text-[22px] lg:text-[20px] md:text-[20px] sm:text-[20px] xs:text-[18px] text-[16px]",
    heroSubTextMaxWidth: "2xl:max-w-[530px] xl:max-w-[510px] lg:max-w-[450px] md:max-w-[450px] sm:max-w-[450px] xs:max-w-[340px] max-w-[340px]",
    heroTextButtonGap: "2xl:mb-12 mb-8",
};

const projectsStyles = {
    projectDisplayWidth: "4xl:w-[1024px] 3xl:w-[896px] 2xl:w-[896px] xl:w-[768px]",
    projectDisplayImgHeight: "4xl:h-[576px] 3xl:h-[504px] 2xl:h-[504px] xl:h-[432px]",
    projectsSelectionWidth: "4xl:w-[550px] 3xl:w-[500px] 2xl:w-[400px] xl:w-[240px]",
    projectSelectHeadText: "4xl:text-2xl 3xl:text-xl 2xl:text-lg xl:text-lg",
    projectSelectImgWidth: "3xl:w-[176px] 2xl:w-[128px] xl:w-[176px]",
    projectSelectImgHeight: "3xl:h-[99px] 2xl:h-[72px] xl:h-[99px]",
};

const projectsMobileStyles = {
    projectImgWidth: "lg:w-[768px] md:w-[512px] sm:w-[512px] w-[384px]",
    projectImgHeight: "lg:h-[432px] md:h-[288px] sm:h-[288px] h-[216px]",
}

export {
    styles,
    heroStyles,
    projectsStyles,
    projectsMobileStyles,
}