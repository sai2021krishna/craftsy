const LazyLoadImage = require('react-lazy-load-image-component').LazyLoadImage;

type ImgaeComponentProps = {
    src: string,
    classes: string;
    altText: string
}
export const ImageComponent = (props: ImgaeComponentProps) => {
    const { src, classes, altText } = props;

    return (
        <>
            <LazyLoadImage alt={altText} src={src} className={classes} />
        </>
    )
}