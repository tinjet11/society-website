export default function Loading() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen content-color">
                <div className="border-4 border-t-4 border-gray-300 h-16 w-16 rounded-full animate-spin mb-2"></div>
                <p className="text-white">Loading</p>
            </div>
        </>
    )


}