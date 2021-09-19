import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SnackBar from "../BasicComponents/SnackBar";
import firebase from '../Firebas/firebaseconfig';
import SocialProfileItem from '../BasicComponents/SocialProfileItem';
export default function Social({ navigation }) {
    const [usersQuizes, setUsersQuizes] = useState({});
    const [users, setUsers] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [snackBarVisible, setSnackBarVisible] = useState(false);
    const [snackBarText, setSnackBarText] = useState("");
    const [snackBarType, setSnackBarType] = useState("");

    //component did mount
    useEffect(() => {
        fetchUsersQuizes();
        fetchUsers();
    }, [])

    //function to fetch quizes of all users
    async function fetchUsersQuizes() {
    }

    //function to fetch users from firebase db
    async function fetchUsers() {
        const loggeduserid= await AsyncStorage.getItem("useruid");
        if (loggeduserid){
            const Quizdbref= firebase.app().database().ref('users/');
            Quizdbref.once('value').then((res)=>{
                const Userdb= res.val();
                if (Userdb){
                    var userarray=[];
                    for (const user in Userdb ){
                        const user1=Userdb[user]
                        userarray.push(user1);
                    }
                    setUsers(userarray)
                }
               setIsLoading(false) 
            })
            .catch((error)=>{
                displaySnackBar("error", "Failed to get users"+error)

            })
        }
        else {
            displaySnackBar("error","user not logged in ");
        }
        
    }

    //function to handle when any profile card is clicked on
    function handleProfileClick(index) {
        console.log("profile clicked", index);
    }

    //function to display snackbar
    function displaySnackBar(type, text) {
        setSnackBarType(type);
        setSnackBarText(text);
        setSnackBarVisible(true);
    }

    //function to hide snackbar
    function hideSnackBar() {
        setSnackBarVisible(false);
    }

    //component rendering
    return (
        <>
            <View style={styles.container}>
                {
                    isLoading ?
                        <View style={styles.loaderContainer}>
                            <ActivityIndicator style={styles.loader} />
                        </View>
                        :
                        users.map(function(item, idx) {
                            return (
                             <SocialProfileItem 
                             key={idx}
                             index={idx}
                             profilePicUri={item.profilePicUri}
                             name={item.name}
                             email={item.email}
                             desc={item.desc}
                             navigation={navigation}
                            onPress={handleProfileClick}

                             >

                             </SocialProfileItem>
                            )
                        })
                }
            </View>

            {
                snackBarVisible ?
                    <SnackBar
                        isVisible={snackBarVisible}
                        text={snackBarText}
                        type={snackBarType}
                        onClose={hideSnackBar}
                    />
                    : null
            }
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingHorizontal: 30,
    },

    loaderContainer: {
        flex: 1,
        justifyContent: "center",
    },

    title: {
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: 0.1,
        color: '#2E2E2E',
    },

    divider: {
        paddingVertical: 8,
    },
});