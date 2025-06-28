import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // assertEquals
        assertEquals("2 + 3 should equal 5", 5, 2 + 3);

        // assertTrue
        assertTrue("5 should be greater than 3", 5 > 3);

        // assertFalse
        assertFalse("5 should not be less than 3", 5 < 3);

        // assertNull
        Object obj = null;
        assertNull("Object should be null", obj);

        // assertNotNull
        String name = "JUnit";
        assertNotNull("String should not be null", name);
    }
}

