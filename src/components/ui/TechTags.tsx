import { TagKeyType, tagData } from "../../constants"

const TechTags = ({ tags }: {tags: TagKeyType[]}) => {
    return(
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => {
                const tagTextColor = tagData[tag].textColor
                const tagBgColor = tagData[tag].backgroundColor

                return (
                    <a 
                        key={idx}
                        className={`px-2 rounded-sm ${tagTextColor} ${tagBgColor}`}
                        href={tagData[tag].name}
                        target="_blank"
                    >
                        # {tagData[tag].name}
                    </a>
                )
            })}
        </div>
    )
}

export default TechTags