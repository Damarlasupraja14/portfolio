function CategoryList() {
    try {
        const categories = [
    { label: "Python Projects", icon: "python" },
    { label: "SQL Analysis", icon: "sql" },
    { label: "Power BI Dashboards", icon: "powerbi" },
    { label: "Excel Dashboard", icon: "excel" },
    { label: "Statistics", icon: "statistics" }
];

        return (
            <div className="flex flex-wrap gap-4 mt-8" data-name="category-list">
                {categories.map((category, index) => (
                    <CategoryButton 
                        key={index} 
                        label={category.label} 
                        icon={category.icon}
                    />
                ))}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
