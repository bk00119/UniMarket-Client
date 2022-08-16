export const styles = {
    categoriesScreenContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20,
    },
    categoriesContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignContent: 'space-around',
    },
    categoryContainer: {
        width: '33%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    categoryInnerContainer: {
        paddingHorizontal: 10,
        width: '100%',
    },
    categoryImage: {
        backgroundColor: 'lightgray',
        aspectRatio: 1
    },
    categoryName: {
        textAlign: 'center',
        fontWeight: '600',
        width: '100%'
    }
}