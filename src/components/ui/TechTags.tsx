import { TagKeyType, tagData } from "../../constants"

const TechTags = ({ tags }: {tags: TagKeyType[]}) => {
    return(
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => {
                const tagTextColor = tagData[tag].textColor
                const tagBgColor = tagData[tag].backgroundColor

                return (
                    <div 
                        key={idx}
                        className={`px-2 rounded-sm ${tagTextColor} ${tagBgColor}`}
                    >
                        # {tagData[tag].name}
                    </div>
                )
            })}
        </div>
    )
}

export default TechTags