export function createUserReportMutation(report) { 
    return {
        query: `
            mutation {
                createUserReport(userReportInput: {
                name: "${report.name}",
                genre: "${report.genre}",
                phone: "${report.phone}",
                incidentKind: "${report.incidentKind}",
                description: "${report.description}",
                latitude: "${report.latitude}",
                longitude: "${report.longitude}",
                isVictim: ${report.isVictim},
                isReportedToPolice: ${report.isReportedToPolice},
                policeReport: "${report.policeReport}"
                }) {
                    _id
                }
            }
        `
    }
}


