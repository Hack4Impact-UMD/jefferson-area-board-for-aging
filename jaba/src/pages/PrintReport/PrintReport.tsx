import { Document, PDFViewer, Page, Text, View } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Resource } from "../../types/ResourceObject";
import styles from "./PDFStyles";
import otherStyles from "./PrintReport.module.css";

const PrintReport = (): JSX.Element => {
  const location = useLocation();
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    if (location.state?.fromApp && location.state.resource) {
      setResources(location.state.resource);
    }
  }, []);

  return (
    // A container is used to get rid of a bug with iframes where there are 2 scrollbars
    <div className={otherStyles.container}>
      <PDFViewer width="100%" height="100%">
        <Document style={styles.doc}>
          {/* <Text style={styles.header}>Resources</Text> */}
          {resources.map((resource, index) => {
            return (
              <Page size="A4" style={styles.page} break>
                <View style={styles.table}>
                  <View>
                    <View style={styles.activeCourses}>
                      <Text style={styles.boldHeader}>{resource.name}</Text>
                    </View>

                    <View style={styles.tableRow} key={`category ${index}`}>
                      <Text style={styles.rowTitle}>Primary Category:</Text>
                      <Text>{`${resource.primaryCategory}`}</Text>
                    </View>
                    {resource.subCategory ? (
                      <View
                        style={styles.tableRow}
                        key={`secondary category ${index}`}
                      >
                        <Text style={styles.rowTitle}>Secondary Category:</Text>

                        <Text>{`${resource.subCategory}`}</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                    <View style={styles.tableRow} key={`address ${index}`}>
                      <Text style={styles.rowTitle}>Physical Address:</Text>

                      <Text wrap={true}>
                        {`${resource.physicalAddress.street} \n${resource.physicalAddress.city}, ${resource.physicalAddress.state}, ${resource.physicalAddress.zip}`}
                      </Text>
                    </View>
                    <View
                      style={styles.tableRow}
                      key={`mailing address ${index}`}
                    >
                      <Text style={styles.rowTitle}>Mailing Address:</Text>

                      <Text wrap={true}>
                        {`${resource.mailingAddress.street} \n${resource.mailingAddress.city}, ${resource.mailingAddress.state}, ${resource.mailingAddress.zip}`}
                      </Text>
                    </View>
                    <View style={styles.tableRow} key={`phone ${index}`}>
                      <Text style={styles.rowTitle}>Phone Number:</Text>
                      <Text>{`${resource.mainPhone}`}</Text>
                    </View>
                    <View
                      style={styles.tableRow}
                      key={`impaired phone ${index}`}
                    >
                      <Text style={styles.rowTitle}>
                        Hearing Impaired Phone:
                      </Text>
                      <Text>{`${resource.impairedPhone}`}</Text>
                    </View>
                    <View style={styles.tableRow} key={`website ${index}`}>
                      <Text style={styles.rowTitle}>Website:</Text>
                      <Text>{`${resource.website}`}</Text>
                    </View>
                    <View style={styles.tableRow} key={`email ${index}`}>
                      <Text style={styles.rowTitle}>Email:</Text>
                      <Text>{`${resource.email}`}</Text>
                    </View>
                    <View style={styles.tableRow} key={`contact ${index}`}>
                      <Text style={styles.rowTitle}>Contact Information:</Text>
                      <Text
                        wrap={true}
                      >{`${resource.mainContact.name}\n${resource.mainContact.email}\n${resource.mainContact.phone}`}</Text>
                    </View>
                    <View style={styles.tableRow} key={`office hours ${index}`}>
                      <Text style={styles.rowTitle}>Office Hours:</Text>
                      <Text wrap={true}>{`${resource.officeHours}`}</Text>
                    </View>
                    {resource.planningDistricts.length > 0 ? (
                      <View
                        style={styles.tableRow}
                        key={`planning districts ${index}`}
                      >
                        <Text style={styles.rowTitle}>
                          Planning Districts Served:
                        </Text>
                        <Text wrap={true}>{`${resource.planningDistricts
                          .map(String)
                          .join(", ")}`}</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                    {resource.zips.length > 0 ? (
                      <View style={styles.tableRow} key={`zips ${index}`}>
                        <Text style={styles.rowTitle}>Zip Codes Served:</Text>
                        <Text wrap={true}>{`${resource.zips
                          .map(String)
                          .join(", ")}`}</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                    {Object.keys(resource.states).length > 0 ? (
                      <View style={styles.tableRow} key={`states ${index}`}>
                        <Text style={styles.rowTitle}>States Served:</Text>
                        <Text wrap={true}>{`${Object.keys(resource.states)
                          .map(String)
                          .join(", ")}`}</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                  </View>
                </View>
              </Page>
            );
          })}
        </Document>
      </PDFViewer>
    </div>
  );
};

export default PrintReport;
{
  /* <View style={styles.tableRow} key={`address ${index}`}>
                      <Text style={styles.rowTitle}>Physical Address:</Text>

                      <Text wrap>
                        {`aiosjdioasdjioasjdoijoaidjoiasjdio${resource.physicalAddress.street}, ${resource.physicalAddress.city}, ${resource.physicalAddress.state}, ${resource.physicalAddress.zip}`}
                      </Text>
                    </View> */
}
