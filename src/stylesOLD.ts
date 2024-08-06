const styles = {
    maxContainer: 
        "4xl:max-w-[1920px] 3xl:max-w-[1728px] 2xl:max-w-[1536px] xl:max-w-[1280px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] xs:max-w-[450px] min-w-[320px] mx-auto 3xl:px-36 md:px-24 sm:px-12 px-4",
    sectionPaddingBottom: 
        "sm:pb-48 pb-24",
    primaryBackground: 
        "dark:bg-darkBase-900 bg-base-900",
    primaryHoverBackground:
        "hover:dark:bg-darkBase-700 hover:bg-base-700",
    primaryBorderColor:
        "dark:border-darkBase-700 border-base-700",
    secondaryBackground:
        "dark:bg-darkBase-800 bg-base-800",
    secondaryHoverBackground:
        "hover:dark:bg-darkBase-600 hover:bg-base-600",
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