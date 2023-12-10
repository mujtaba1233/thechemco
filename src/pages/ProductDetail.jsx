import React, { useEffect, useState } from 'react'
import { chemicalDetails } from '../Products'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const [product, setProduct] = useState({ title: "", description: "" })
    const params = useParams()
    useEffect(() => {
        const product = chemicalDetails.find(el => params.id == el.id)
        setProduct(product)
    }, [])
    const renderDescriptionWithBoldTitle = (title, description) => {
        // Use regular expression to replace occurrences of the title with a bold version
        const boldedTitle = `<b>${title}</b>`;
        const boldedDescription = description.replace(new RegExp(title, 'gi'), boldedTitle);

        // Render the HTML dangerously (assuming the content is safe)
        return <p dangerouslySetInnerHTML={{ __html: boldedDescription }} />;
    };
    const renderDescriptionWithHighlightedTitle = (title, description) => {
        // Find the index of the first dot
        const firstDotIndex = description.indexOf('.');
    
        // Extract the content until the first dot (inclusive)
        const contentUntilFirstDot = firstDotIndex !== -1 ? description.substring(0, firstDotIndex + 1) : description;
    
        // Replace occurrences of the title with a highlighted version
        const highlightedTitle = `<b>${title}</b>`;
        const highlightedContent = contentUntilFirstDot.replace(new RegExp(title, 'gi'), highlightedTitle);
    
        // Render the HTML dangerously (assuming the content is safe)
        return <p dangerouslySetInnerHTML={{ __html: highlightedContent }} />;
      };
    return (
        <div>
            <section className='container'>
                <h2 style={{ color: '#39758b', fontWeight: "bold" }}>
                    {product.title}
                </h2>
                <p style={{ fontSize: 20, fontWeight: 400 }}>
                {renderDescriptionWithHighlightedTitle(product.title, product.description)}
                </p>
                <h3>
                    Shipping Information
                </h3>
                <p style={{ fontSize: 20, fontWeight: 400 }}>
                    Contact The Chemical Company for current packaging options, lead times and supply chain updates.
                </p>
                <button className='btn-button-rq-quote'>
                    REQUEST QUOTE
                </button>
                <h3>
                    DESCRIPTION
                </h3>
                <p style={{ fontSize: 20, fontWeight: 400 }}>
                    {renderDescriptionWithBoldTitle(product.title, product.description)}
                </p>

            </section>
        </div>
    )
}

export default ProductDetail