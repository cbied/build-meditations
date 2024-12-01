import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '@rneui/themed';
import { supabase } from '../../lib/supabase'



export default function Dashboard() {
    const [loading, setLoading] = useState(false)

      async function signOut() {
        setLoading(true)
        supabase.auth.signOut()
        setLoading(false)
      }
return(
    <View style={styles.container}>
        <View style={[styles.verticallySpaced, styles.mt20]}>
            <Text style={styles.title}>just red</Text>
        </View>
        <View style={styles.verticallySpaced}>
          <Button title="Sign Out" disabled={loading} onPress={() => signOut()} />
        </View>
    </View>
    )

}


const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  font: {
     color: 'white'
  },
  title: {
      color: 'red'
      }
})